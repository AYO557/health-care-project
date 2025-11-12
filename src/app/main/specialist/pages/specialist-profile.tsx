import React from "react";
import PageHeader from "../../components/page-header";
import { Star, MapPin, Calendar, Clock, Award, Users } from "lucide-react";
import { specialist } from "../libs/constants";

const SpecialistProfile: React.FC = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <>
      <PageHeader title="Specialist Profile" showBackButton />

      <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-full p-4">
        {/* Left Column - Main Info */}
        <section className="col-span-3 grid grid-cols-2 gap-4 auto-rows-[minmax(200px,auto)]">
          {/* Basic Info Card */}
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="size-32 rounded-full bg-darkgraygreen mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              {specialist.name}
            </h2>
            <p className="text-lg text-primary font-semibold">
              {specialist.specialization}
            </p>
            <div className="flex items-center mt-2">
              {renderStars(specialist.rating)}
              <span className="text-sm text-gray-500 ml-2">
                ({specialist.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{specialist.location}</span>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Professional Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award size={20} className="text-primary mr-2" />
                  <span className="text-sm">Experience</span>
                </div>
                <span className="font-semibold">
                  {specialist.experience} years
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users size={20} className="text-primary mr-2" />
                  <span className="text-sm">Patients Treated</span>
                </div>
                <span className="font-semibold">5000+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock size={20} className="text-primary mr-2" />
                  <span className="text-sm">Consultation Fee</span>
                </div>
                <span className="font-semibold">
                  ${specialist.consultationFee}
                </span>
              </div>
            </div>
          </div>

          {/* About & Specialties Card */}
          <div className="bg-white col-span-2 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">About & Specialties</h3>
            <p className="text-gray-600 mb-6">{specialist.about}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Treatable Conditions</h4>
              <div className="flex flex-wrap gap-2">
                {specialist.issues.map((issue, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {issue}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Languages Spoken</h4>
              <div className="flex flex-wrap gap-2">
                {specialist.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications Card */}
          <div className="bg-white col-span-2 rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold">
              Education & Certifications
            </h3>

            <div>
              <h4 className="font-semibold mb-3">Education</h4>
              <ul className="space-y-2">
                {specialist.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {specialist.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Column - Sidebar */}
        <section className="col-span-2 space-y-6">
          {/* Availability Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar size={20} className="mr-2 text-primary" />
              Availability
            </h3>
            <div className="space-y-2">
              {specialist.availability.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                >
                  <span className="text-gray-600">{slot}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Available
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Book Appointment
            </button>
          </div>

          {/* Contact Information */}
          <div className="rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm">Phone</label>
                <p className="font-medium text-gray-600">
                  {specialist.contact.phone}
                </p>
              </div>
              <div>
                <label className="text-sm">Email</label>
                <p className="font-medium text-gray-600">
                  {specialist.contact.email}
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 border border-primary text-primary py-2 rounded-lg font-semibold hover:bg-darkgreen hover:text-white transition-colors cursor-pointer">
                Call Now
              </button>
              <button className="flex-1 border border-primary text-primary py-2 rounded-lg font-semibold hover:bg-darkgreen hover:text-white transition-colors cursor-pointer">
                Send Email
              </button>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400">
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Emergency Contact
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              For urgent medical concerns
            </p>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-red-700 font-semibold text-center">
                +1 (555) 911-HELP
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpecialistProfile;
