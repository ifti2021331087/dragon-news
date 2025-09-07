import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  // Fallback for news object properties
  const details = news?.details || '';
  const author = news?.author || {};
  const rating = news?.rating || { number: 0 };
  const totalView = news?.total_view || 0;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-lg p-4 mb-4">
      <figure className="overflow-hidden">
        <img
          src={news?.image_url || 'https://via.placeholder.com/400x250'}
          alt={news?.title || 'News Image'}
          className="w-full object-contain" // Changed to object-contain and removed fixed height
        />
      </figure>
      <div className="card-body p-0 pt-4">
        <h2 className="card-title text-xl font-bold">{news?.title || 'No Title'}</h2>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={author?.img || 'https://via.placeholder.com/40'}
            alt={author?.name || 'Author'}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name || 'Unknown Author'}</p>
            <p className="text-sm text-gray-500">
              {author?.published_date ? new Date(author.published_date).toLocaleDateString() : '2022-08-21'}
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {details || 'No details available'}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.round(rating.number) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm">{rating.number || 0}</span>
          </div>
          <span className="text-sm text-gray-500">{totalView} views</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/news/${news._id}`} className="btn btn-link text-orange-500 btn-sm">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;