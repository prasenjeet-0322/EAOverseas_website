import mongoose from 'mongoose';
import { Blog } from './models/Blog';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const seedBlogs = [
    {
        title: "How Eduwoy Uses AI to Guarantee Your University Admission",
        slug: "how-eduwoy-uses-ai-for-admissions",
        content: `
            <h2>The Future of Overseas Education Consulting</h2>
            <p>At Eduwoy, we've revolutionized the traditional study abroad consulting model by integrating advanced Artificial Intelligence with human expertise. This dual approach ensures that every student's journey is both highly personalized and data-driven.</p>
            
            <h3>Intelligent Profile Matching</h3>
            <p>Our proprietary AI engine analyzes thousands of data points—from your academic history and extracurricular achievements to your budgetary constraints—and instantly matches you with universities where you have the highest statistical probability of admission and scholarship success.</p>
            
            <h3>End-to-End Success</h3>
            <p>But AI is only half the story. Once the AI shortlists your best options, our expert counselors step in to help you craft compelling essays, prepare for visa interviews, and handle all documentation. It's the perfect blend of machine precision and human empathy.</p>
        `,
        excerpt: "Discover how Eduwoy combines advanced AI technology with expert human counseling to offer personalized, data-driven study abroad journeys.",
        author: "Eduwoy Tech Team",
        coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
        category: "Eduwoy Insights",
        tags: ["AI", "Admissions", "Eduwoy"],
        isPublished: true
    }
];

async function runSeed() {
    try {
        const uri = process.env.MONGODB_URI || '';
        await mongoose.connect(uri);
        console.log('Connected to MongoDB Cluster');

        // Clear existing blogs
        await Blog.deleteMany({});

        for (const blogData of seedBlogs) {
            await Blog.findOneAndUpdate(
                { slug: blogData.slug },
                blogData,
                { upsert: true, new: true }
            );
        }

        console.log('Institutional Knowledge Base Seeded Successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

runSeed();
