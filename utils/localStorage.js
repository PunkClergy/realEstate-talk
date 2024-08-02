const safeLocalStorage = {
    getItem: key => {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return null;
        }
    },
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.error('Error setting item in localStorage:', error);
        }
    },
};
export default safeLocalStorage;