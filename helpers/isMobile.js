const isMobile = () => {
  if (typeof window !== "undefined") {
    let details = window.navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (isMobileDevice) {
      return true;
    } else {
      return false;
    }
  }
};

export default isMobile;
