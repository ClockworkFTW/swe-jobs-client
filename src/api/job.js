import API from ".";

export const getJobs = async () => {
  try {
    const res = await API.get("/job");
    return res.data.jobs;
  } catch (error) {
    throw error;
  }
};
