export const generateRandomString = (length) => {
    return Math.random().toString(36).substring(2, 2 + length);
};

export const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
};
