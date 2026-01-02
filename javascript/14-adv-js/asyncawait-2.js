function fetchBlogData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Blog data fetched!");
    });
  }, 2000);
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched!");
    }, 3000);
  });
}

async function fetchData() {
  try {
    console.log("Fetching data...");
    const [blogData, commData] = await Promise.all([
      fetchBlogData(),
      fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commData);
    console.log("fetching complete");
  } catch (error) {
    console.log(error);
  }
}

fetchData();
