export default Utils = {
  osDetect: () => {
    return {
      getUserAgent: () => {
        return navigator.userAgent;
      },
      getPlatform: () => {
        return navigator.platform;
      },
      isIos: () => {
        return /iPhone|iPad|iPod/.test(osDetect.getPlatform());
      },
      isAndroid: () => {
        return /Android/.test(osDetect.getUserAgent());
      },
      isBlackBerry: () => {
        return /BlackBerry/.test(osDetect.getPlatform());
      },
      isMac: () => {
        return /Mac/.test(osDetect.getPlatform());
      },
      isWindows: () => {
        return /Win/.test(osDetect.getPlatform());
      },
      isLinux: () => {
        return /Linux/.test(osDetect.getPlatform()) && !osDetect.isAndroid();
      },
      get: () => {
        if (osDetect.isIos()) return "iOS";
        if (osDetect.isAndroid()) return "Android";
        if (osDetect.isBlackBerry()) return "BlackBerry";
        if (osDetect.isMac()) return "Mac";
        if (osDetect.isWindows()) return "Windows";
        if (osDetect.isLinux()) return "Linux";
        return "Unknown";
      },
      isMobile: () => {
        return osDetect.isAndroid() || osDetect.isBlackBerry() || osDetect.isIos()
      }
    };
  }
};
