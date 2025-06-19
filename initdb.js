const sql = require("better-sqlite3");
const db = sql("blogs.db");

const dummyBlogs = [
  {
    slug: "my-pizza-story",
    title: "My Pizza Story",
    image: "/images/my-pizza-story.png",
    description: `
    This blog is more than just a collection of words — it’s a reflection of how I see the world, how I process life, and how I find meaning in both the ordinary and the extraordinary. It’s a space I’ve created to slow down, express myself, and connect — not only with my thoughts but hopefully with you as well.

    Why This Blog Exists

    In today’s fast-moving world, we’re often overwhelmed by information, busy routines, endless notifications, and the pressure to always stay “on.” We scroll past countless posts, headlines, and updates — but how often do we pause and reflect?
This blog was born out of that desire to pause.
I wanted to create a space that isn’t noisy, isn’t rushed, and isn’t trying to sell you something every few lines. It’s simply a quiet, thoughtful place to explore ideas, share stories, and write freely. Sometimes the posts will be light-hearted, sometimes personal, and sometimes deep — but always honest and human.

What You’ll Find Here

This isn’t a niche blog. I don't stick to one topic because, like life, my thoughts wander. That’s what makes this space feel alive.
You might find a post about something that happened in my day that taught me a small but valuable lesson. You might read about a random thought I had during a late-night walk. Some days I write about the challenges of growing up, the pressure to succeed, or the art of slowing down. Other times it might be book reflections, things I’m learning, or just something funny that made me laugh more than it should have.
There’s no fixed format, and no expectations — just writing that comes from the heart.
Topics may include:
Personal reflections and real-life experiences
Thoughts on personal growth, habits, and mindset
Random observations about people and the world
Tips and lessons from everyday living
Creative writing or journal-style posts
Occasional lists, reviews, or helpful resources
And sometimes, just rambling thoughts that felt good to write out
    `,
  },
  {
    slug: "idea-to-action",
    title: "Idea to Action",
    image: "/images/my-pizza-story.png",
    description: `
    This blog is more than just a collection of words — it’s a reflection of how I see the world, how I process life, and how I find meaning in both the ordinary and the extraordinary. It’s a space I’ve created to slow down, express myself, and connect — not only with my thoughts but hopefully with you as well.

    Why This Blog Exists

    In today’s fast-moving world, we’re often overwhelmed by information, busy routines, endless notifications, and the pressure to always stay “on.” We scroll past countless posts, headlines, and updates — but how often do we pause and reflect?
This blog was born out of that desire to pause.
I wanted to create a space that isn’t noisy, isn’t rushed, and isn’t trying to sell you something every few lines. It’s simply a quiet, thoughtful place to explore ideas, share stories, and write freely. Sometimes the posts will be light-hearted, sometimes personal, and sometimes deep — but always honest and human.

What You’ll Find Here

This isn’t a niche blog. I don't stick to one topic because, like life, my thoughts wander. That’s what makes this space feel alive.
You might find a post about something that happened in my day that taught me a small but valuable lesson. You might read about a random thought I had during a late-night walk. Some days I write about the challenges of growing up, the pressure to succeed, or the art of slowing down. Other times it might be book reflections, things I’m learning, or just something funny that made me laugh more than it should have.
There’s no fixed format, and no expectations — just writing that comes from the heart.
Topics may include:
Personal reflections and real-life experiences
Thoughts on personal growth, habits, and mindset
Random observations about people and the world
Tips and lessons from everyday living
Creative writing or journal-style posts
Occasional lists, reviews, or helpful resources
And sometimes, just rambling thoughts that felt good to write out
    `,
  },
  {
    slug: "built-with-bugs",
    title: "Built with Bugs",
    image: "/images/built-with-bugs.png",
    description: `
    This blog is more than just a collection of words — it’s a reflection of how I see the world, how I process life, and how I find meaning in both the ordinary and the extraordinary. It’s a space I’ve created to slow down, express myself, and connect — not only with my thoughts but hopefully with you as well.

    Why This Blog Exists

    In today’s fast-moving world, we’re often overwhelmed by information, busy routines, endless notifications, and the pressure to always stay “on.” We scroll past countless posts, headlines, and updates — but how often do we pause and reflect?
This blog was born out of that desire to pause.
I wanted to create a space that isn’t noisy, isn’t rushed, and isn’t trying to sell you something every few lines. It’s simply a quiet, thoughtful place to explore ideas, share stories, and write freely. Sometimes the posts will be light-hearted, sometimes personal, and sometimes deep — but always honest and human.

What You’ll Find Here

This isn’t a niche blog. I don't stick to one topic because, like life, my thoughts wander. That’s what makes this space feel alive.
You might find a post about something that happened in my day that taught me a small but valuable lesson. You might read about a random thought I had during a late-night walk. Some days I write about the challenges of growing up, the pressure to succeed, or the art of slowing down. Other times it might be book reflections, things I’m learning, or just something funny that made me laugh more than it should have.
There’s no fixed format, and no expectations — just writing that comes from the heart.
Topics may include:
Personal reflections and real-life experiences
Thoughts on personal growth, habits, and mindset
Random observations about people and the world
Tips and lessons from everyday living
Creative writing or journal-style posts
Occasional lists, reviews, or helpful resources
And sometimes, just rambling thoughts that felt good to write out
    `,
  },
];

// ✅ No trailing comma after last column
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS blogs (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL
   )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO blogs VALUES (
         null,
         @slug,
         @title,
         @image,
         @description
      )
   `);
}

initData();
