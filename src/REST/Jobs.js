// const baseUrl = process.env.REACT_APP_API_URL;
var baseUrl = "https://adsrevenue.co/";

export const getAllJobs = {
  getAllJobs(urls) {
    const url = urls;
    return this.execJob(baseUrl + url);
  },

  async execJob(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return await response.json();
    } catch (err) {
      return err;
    }
  },
};

export const getSingleJob = {
  getSingleJob(urls) {
    const url = urls;
    return this.execJob(baseUrl + url);
  },

  async execJob(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return await response.json();
    } catch (err) {
      return err;
    }
  },
};

export const applyJob = {
  applyJob(urls, data) {
    const url = urls;
    return this.execJob(baseUrl + url, data);
  },

  async execJob(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (err) {
      return err;
    }
  },
};
