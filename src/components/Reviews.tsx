import React from 'react'; // Community Reviews
import { Star } from 'lucide-react';

type Review = {
  name: string;
  location: string;
  review: string;
  rating: number;
};

const Reviews = () => {
  const reviewLink = 'https://docs.google.com/forms/d/e/1FAIpQLSc_rHtmy5exezUEFJq5l3guuKCY5ciWdmCids3G94umGWqMxQ/viewform?usp=header ';

  const reviews: Review[] = [
    {
      name: 'Swapan Roy',
      location: 'Kakdwip',
      review:
        'True humanity develops only when we learn to listen to the cries of living people, learn to stand by their side. Otherwise, the curse of emptiness will make us cry again and again, but then maybe there will be no one to hear our cries!The light of humanity still survives in society because of the Achena Sukh of Kakdwip or such exceptional organizations. When the family, society or the state fails to listen to the cries of living people, some people come forward with selfless love.These organizations are like silent poems of humanity - where the dead will be bowed in respect, but the main goal will be to alleviate the suffering of living people. They understand that not only oxygen is needed to survive, but also love, compassion and empathy.',
      rating: 5,
    },
    {
      name: 'Sujit Mintu Saha',
      location: 'Kakdwip',
      review:
        "In this way, everyone should celebrate their special days by donating one meal a day to these hungry people, Achena Sukh is ready to provide you with all kinds of support.",
      rating: 5,
    },
    {
      name: 'Santanu Das',
      location: 'Kakdwip',
      review:
        'Very nice plan, this kind of non profit organization is not often seen,',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold mb-4">
            Community Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? 'fill-[#b0db9c] text-[#b0db9c]' : 'fill-[#b0db9c]/40 text-[#b0db9c]/40'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-2xl font-semibold text-[#b0db9c]">4.8/5</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Based on feedback from community members and beneficiaries
          </p>

          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2e2e2e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#b0db9c] hover:text-black hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.45)]"
            aria-label="Share your review or suggestion"
          >
            Share Your Review or Suggestion
          </a>
        </div>

        {/* Cards */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <li key={idx} role="listitem">
              <ReviewCard review={r} index={idx} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = React.useState(false);
  const contentId = `review-content-${index}`;
  const buttonId = `review-toggle-${index}`;

  // Show the toggle if text is lengthy. You can also detect via ref/scrollHeight if needed.
  const isLong = review.review.length > 180;

  return (
    <article className="h-full bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#b0db9c]/40 hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)] focus-within:border-[#b0db9c]/60">
      {/* Stars */}
      <div className="flex mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#b0db9c] text-[#b0db9c]" aria-hidden="true" />
        ))}
      </div>

      {/* Content */}
      <p
        id={contentId}
        className={`text-gray-300 mb-4 italic transition-[max-height] duration-300 ${expanded ? '' : 'line-clamp-4'}`}
        aria-live="polite"
        aria-describedby={buttonId}
      >
        “{review.review}”
      </p>

      {/* Toggle */}
      {isLong && (
        <div>
          <button
            id={buttonId}
            type="button"
            className="text-sm font-semibold text-[#b0db9c] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>
      )}

      {/* Footer identity */}
      <div className="mt-5 pt-4 border-t border-white/10">
        <h4 className="font-semibold text-white">{review.name}</h4>
        <p className="text-gray-400 text-sm">{review.location}</p>
      </div>
    </article>
  );
}

export default Reviews;
