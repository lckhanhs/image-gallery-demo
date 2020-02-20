export const Utils = {
  osDetect: () => {
    return {
      getUserAgent: () => {
        return navigator.userAgent;
      },
      getPlatform: () => {
        return navigator.platform;
      },
      isIos: () => {
        return /iPhone|iPad|iPod/.test(Utils.osDetect().getPlatform());
      },
      isAndroid: () => {
        return /Android/.test(Utils.osDetect().getUserAgent());
      },
      isBlackBerry: () => {
        return /BlackBerry/.test(Utils.osDetect().getPlatform());
      },
      isMac: () => {
        return /Mac/.test(Utils.osDetect().getPlatform());
      },
      isWindows: () => {
        return /Win/.test(Utils.osDetect().getPlatform());
      },
      isLinux: () => {
        return /Linux/.test(Utils.osDetect().getPlatform()) && !Utils.osDetect().isAndroid();
      },
      get: () => {
        if (Utils.osDetect().isIos()) return "iOS";
        if (Utils.osDetect().isAndroid()) return "Android";
        if (Utils.osDetect().isBlackBerry()) return "BlackBerry";
        if (Utils.osDetect().isMac()) return "Mac";
        if (Utils.osDetect().isWindows()) return "Windows";
        if (Utils.osDetect().isLinux()) return "Linux";
        return "Unknown";
      },
      isMobile: () => {
        return Utils.osDetect().isAndroid() || Utils.osDetect().isBlackBerry() || Utils.osDetect().isIos()
      }
    };
  }
};
