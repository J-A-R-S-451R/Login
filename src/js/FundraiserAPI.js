import {useState, useEffect} from 'react';

const API_BASE_URL = "https://jarsfundraiser.azurewebsites.net/Fundraiser/"
const currentUserListeners = [];

async function sendRequest(requestMethod, endpoint, data) {
    const headers = {
        "Content-Type": "application/json",
    }

    const authToken = getCurrentAuthToken();
    if (authToken) {
        headers.Authorization = "Bearer " + authToken;
    }

    const uri = API_BASE_URL + endpoint;
    const fetchOpts = {
        method: requestMethod,
        mode: "cors",
        headers,
        credentials: "include",
    }

    if (data) {
        fetchOpts.body = JSON.stringify(data);
    }

    try {
        let response = await fetch(uri, fetchOpts);

        const responseJson = await response.json();
        if (!response.ok) {
            responseJson.success = false;
            return responseJson;
        }
        
        responseJson.success = true;
        return responseJson;

        } catch (err) {
            console.log("ERROR IN HANDLING REQUEST");
            console.log(err);
            return {
                success: false
            }
    }
}

async function login(username, password) {
    const loginPayload = {
        username,
        password
    };

    const sessionToken = await sendRequest("POST", "LoginUser", loginPayload);
    if (!sessionToken.success) {
        return sessionToken;
    }

    storeAuthToken(sessionToken.sessionId);

    const currentUser = await refreshCachedCurrentUser();
    if (!currentUser.success) {
        clearCurrentUser();
        sessionToken.success = false;
    }

    triggerCurrentUserListeners();
    return sessionToken;    
}

async function signUp(username, password, firstName, lastName) {
    const signUpPayload = {
        username,
        password,
        firstName,
        lastName
    };

    const sessionToken = await sendRequest("POST", "AddUser", signUpPayload);
    if (!sessionToken.success) {
        return sessionToken;
    }

    storeAuthToken(sessionToken.sessionId);

    const currentUser = await refreshCachedCurrentUser();
    if (!currentUser.success) {
        clearCurrentUser();
        sessionToken.success = false;
    }

    triggerCurrentUserListeners();
    return sessionToken;    
}

async function updateUser(userInfo) {
    const updateRequest = await sendRequest("POST", "UpdateUser", userInfo);
    await refreshCachedCurrentUser();
    triggerCurrentUserListeners();
    return updateRequest;
}

async function updateUserPassword(newPassword) {
    const passwordChangeRequest = {
        password: newPassword
    };

    const request = await sendRequest("POST", "UpdateUserPassword", passwordChangeRequest);
    return request;
}

async function logout() {
    clearCurrentUser();
    triggerCurrentUserListeners();
}

async function sendDonation(donation) {
    const result = await sendRequest("POST", "SendDonation", donation);
    return result;
}

async function getDonations(fundraiserId) {
    const result = await sendRequest("GET", "GetDonations?fundraiserId=" + fundraiserId);
    return result;
}

async function getCurrentUserDonations() {
    const result = await sendRequest("GET", "GetCurrentUserDonations");
    return result;
}

async function refreshCachedCurrentUser() {
    const currentUser = await sendRequest("GET", "GetCurrentUser");

    if (currentUser.success) {
        storeCurrentUser(currentUser);
    }
    return currentUser;
}

async function getAllFundraisers() {
    const fundraisers = await sendRequest("GET", "GetAllFundraisers");
    return fundraisers;
}

async function getFundraiser(fundraiserId) {
    const fundraiser = await sendRequest("GET", "GetFundraiser?fundraiserId=" + fundraiserId);
    return fundraiser;
}

async function createFundraiser(fundraiser) {
    const newFundraiser = await sendRequest("POST", "CreateFundraiser", fundraiser);
    return newFundraiser;
}

function storeCurrentUser(session) {
    localStorage.setItem("userProfile", JSON.stringify(session));
}

function getCurrentUser() {
    const userStr = localStorage.getItem("userProfile");
    if (!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}

function clearCurrentUser() {
    localStorage.clear();
}

function storeAuthToken(token) {
    localStorage.setItem("authToken", token);
}

function getCurrentAuthToken() {
    return localStorage.getItem("authToken");
}

function registerCurrentUserListener(func) {
    currentUserListeners.push(func);
}

function removeCurrentUserListener(func) {
    const idx = currentUserListeners.indexOf(func);
    if (idx > -1) {
        currentUserListeners.splice(idx, 1);
    }
}

function triggerCurrentUserListeners() {
    const currentUser = getCurrentUser();
    for (let func of currentUserListeners) {
        if (func) {
            func(currentUser);
        }
    }
}

function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(getCurrentUser());
    
    function onUserChange(newUser) {
        setCurrentUser(newUser);
    }

    useEffect(() => {
        registerCurrentUserListener(onUserChange);
        
        return () => {
            removeCurrentUserListener(onUserChange);
        };
    });
  
    return currentUser;
}

export {
    useCurrentUser,
    login,
    signUp,
    logout,
    getAllFundraisers,
    getFundraiser,
    createFundraiser,
    sendDonation,
    getDonations,
    updateUser,
    updateUserPassword,
    getCurrentUserDonations
};