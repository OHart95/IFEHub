document.addEventListener("DOMContentLoaded", function() {
    // Sample data for articles, safety briefings, and documentation
    const articles = [
      { title: "Safety Standards for Construction", content: "Learn about the latest safety standards in construction..." },
      { title: "Fall Protection Guidelines", content: "Important guidelines on preventing falls on-site..." },
    ];
  
    const briefings = [
      { title: "Construction Safety Plan", description: "Latest safety plan for construction workers." },
      { title: "Emergency Procedures", description: "Emergency response protocols." },
    ];
  
    const posts = [
      { text: "Great day on-site today!", image: "https://via.placeholder.com/300", likes: 3, comments: [] },
      { text: "Be safe, always wear your helmet!", image: null, likes: 2, comments: ["That's great advice!"] },
    ];
  
    // Populate Articles (Home Page)
    if (document.getElementById('articles')) {
      const articlesContainer = document.getElementById('articles');
      articles.forEach(article => {
        const articleElem = document.createElement('article');
        articleElem.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElem);
      });
    }
  
    // Populate Safety Briefings (Admin Page)
    if (document.getElementById('briefings')) {
      const briefingsContainer = document.getElementById('briefings');
      briefings.forEach(briefing => {
        const briefingElem = document.createElement('div');
        briefingElem.classList.add('briefing-item');
        briefingElem.innerHTML = `<h4>${briefing.title}</h4><p>${briefing.description}</p>`;
        briefingsContainer.appendChild(briefingElem);
      });
    }
  
    // Display Feed Posts (Feed Page)
    if (document.getElementById('posts')) {
      const postsContainer = document.getElementById('posts');
      posts.forEach(post => {
        const postElem = document.createElement('div');
        postElem.classList.add('post');
        postElem.innerHTML = `
          <p>${post.text}</p>
          ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
          <div>
            <button class="like-btn">Like (${post.likes})</button>
            <div class="comments">
              <h5>Comments:</h5>
              ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
            </div>
          </div>
        `;
        postsContainer.appendChild(postElem);
      });
  
      // Handle New Post Submission (Feed Page)
      const submitPostButton = document.getElementById('submit-post');
      submitPostButton.addEventListener('click', function() {
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').files[0];
  
        if (postText.trim()) {
          const newPost = {
            text: postText,
            image: postImage ? URL.createObjectURL(postImage) : null,
            likes: 0,
            comments: []
          };
  
          posts.push(newPost);
          const postElem = document.createElement('div');
          postElem.classList.add('post');
          postElem.innerHTML = `
            <p>${newPost.text}</p>
            ${newPost.image ? `<img src="${newPost.image}" alt="New Post Image">` : ''}
            <div>
              <button class="like-btn">Like (0)</button>
              <div class="comments"></div>
            </div>
          `;
          postsContainer.prepend(postElem);
          document.getElementById('post-text').value = '';  // Reset the input
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for articles with images
    const articles = [
      {
        title: "Safety Standards for Construction",
        content: "Learn about the latest safety standards in construction. It's essential for workers to follow the recommended practices to ensure a safe working environment, minimize accidents, and comply with industry regulations.",
        image: "https://via.placeholder.com/400x250?text=Safety+Standards", // Placeholder image URL
        fullArticleLink: "full-article.html?safety-standards"  // Link to the full article page
      },
      {
        title: "Fall Protection Guidelines",
        content: "Falls are one of the leading causes of injury on construction sites. In this article, we’ll cover essential guidelines for fall protection, including proper use of harnesses, guardrails, and safety nets.",
        image: "https://via.placeholder.com/400x250?text=Fall+Protection", // Placeholder image URL
        fullArticleLink: "full-article.html?fall-protection"  // Link to the full article page
      },
      {
        title: "Electrical Safety in Construction",
        content: "Electrical safety is critical on construction sites. Workers should be aware of the hazards associated with electrical systems and how to properly use protective equipment and follow safety protocols.",
        image: "https://via.placeholder.com/400x250?text=Electrical+Safety", // Placeholder image URL
        fullArticleLink: "full-article.html?electrical-safety"  // Link to the full article page
      },
      {
        title: "Personal Protective Equipment (PPE) Best Practices",
        content: "Personal Protective Equipment (PPE) is a cornerstone of safety on the construction site. This article discusses the best practices for using PPE effectively, including helmets, gloves, boots, and hearing protection.",
        image: "https://via.placeholder.com/400x250?text=PPE+Best+Practices", // Placeholder image URL
        fullArticleLink: "full-article.html?ppe-best-practices"  // Link to the full article page
      },
      {
        title: "Fire Safety Procedures on Site",
        content: "Fire safety is paramount in construction. In this article, we’ll cover fire prevention measures, fire extinguisher use, and emergency evacuation procedures in case of a fire hazard.",
        image: "https://via.placeholder.com/400x250?text=Fire+Safety", // Placeholder image URL
        fullArticleLink: "full-article.html?fire-safety"  // Link to the full article page
      }
    ];
  
    // Populate Articles (Home Page)
    if (document.getElementById('articles')) {
      const articlesContainer = document.getElementById('articles');
      
      // Loop through the articles and create HTML content for each one
      articles.forEach(article => {
        const articleElem = document.createElement('article');
        articleElem.innerHTML = `
          <img src="${article.image}" alt="${article.title}" class="article-image">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
          <a href="${article.fullArticleLink}">Read more...</a>
        `;
        articlesContainer.appendChild(articleElem);
      });
    }
  });
  
  