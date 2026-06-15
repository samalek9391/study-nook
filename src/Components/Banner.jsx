import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
<section className="min-h-[80vh] bg-base-200">
      <div className="hero min-h-[80vh] max-w-7xl mx-auto px-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          
          {/* Hero Image */}
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Study Room"
              width={600}
              height={400}
            />
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2">
            <span className="badge badge-primary badge-lg mb-4">
              StudyNook
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Perfect
              <span className="text-primary block">
                Study Room
              </span>
            </h1>

            <p className="py-6 text-lg text-base-content/80">
              Browse and book quiet, private study rooms in your
              library. Discover comfortable spaces for focused
              learning, group discussions, and productive study
              sessions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/rooms">
                <button className="btn btn-primary btn-lg">
                  Explore Rooms
                </button>
              </Link>

              <button className="btn btn-outline btn-lg">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  100+
                </h3>
                <p className="text-sm">Study Rooms</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  500+
                </h3>
                <p className="text-sm">Bookings</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  98%
                </h3>
                <p className="text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Banner;