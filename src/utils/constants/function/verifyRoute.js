const verifyRoute = () => {
    const path = window.location.pathname;
    return path.includes('/system');
};

export default verifyRoute;
