import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import logoWhite from '@/assets/logo-white.webp';

// Cover image with purple-theme logo fallback
const CoverImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [imgError, setImgError] = useState(!src);
    if (imgError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-700 via-violet-600 to-primary-dark relative">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
                />
                <img src={logoWhite} alt="Eduwoy" className="relative z-10 h-56 w-auto object-contain drop-shadow-2xl" />
            </div>
        );
    }
    return <img src={src} alt={alt} onError={() => setImgError(true)} className="w-full h-full object-cover" />;
};

const BlogDetails = () => {
    const { id: slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [engagement, setEngagement] = useState({
        likes: 0,
        views: 0
    });
    const [hasLiked, setHasLiked] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    const fetchBlogDetails = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/v1/blogs/${slug}`);
            const data = await response.json();
            if (data.success) {
                setBlog(data.blog);
                setEngagement({
                    likes: data.blog.likes || 0,
                    views: data.blog.views || 0
                });
            } else {
                navigate('/blogs');
            }
        } catch (error) {
            toast.error('Failed to load insight details');
            navigate('/blogs');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLike = async () => {
        if (hasLiked) {
            toast('You have already liked this strategy!', { icon: '✨' });
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/v1/blogs/${slug}/like`, { method: 'POST' });
            const data = await response.json();
            if (data.success) {
                setEngagement(prev => ({ ...prev, likes: data.likes }));
                setHasLiked(true);
                toast.success('Strategy liked!', { icon: '🔥' });
            }
        } catch (error) {
            toast.error('Engagement sync failed');
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: blog?.title || 'Eduwoy Strategy',
            text: blog?.excerpt || 'Check out this strategy from Eduwoy!',
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                toast.success('Shared successfully!');
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success('Link copied to clipboard!', { icon: '📋' });
            }
        } catch (error) {
            if ((error as Error).name !== 'AbortError') {
                toast.error('Failed to share');
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogDetails();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) return null;

    return (
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12">
            <article className="space-y-12 text-left">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.2]">
                        {blog.title}
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-b border-gray-100 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-black">
                                {blog.author?.charAt(0) || 'E'}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{blog.author || 'Eduwoy Expert'}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Strategy Lead</p>
                            </div>
                            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                            <p className="text-xs font-medium text-gray-400 hidden sm:block">
                                {new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <button onClick={handleLike} className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors">
                                <span className={`material-symbols-outlined text-[18px] ${hasLiked ? 'text-red-500 fill-current' : ''}`}>favorite</span>
                                <span className={hasLiked ? 'text-red-500 font-bold' : 'font-medium'}>{engagement.likes}</span>
                            </button>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                <span className="font-medium">{engagement.views}</span>
                            </div>
                            <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">share</span>
                                <span className="font-medium">Share</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[450px]">
                    <CoverImage src={blog.coverImage} alt={blog.title} />
                </div>

                <div 
                    className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-blue-600 prose-blockquote:border-l-8 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:p-8 prose-blockquote:rounded-3xl"
                    dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
                />
            </article>
        </div>
    );
};

export default BlogDetails;


