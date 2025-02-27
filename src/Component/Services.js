import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import service1 from '../Assets/service1.jpg';
import service2 from '../Assets/service2.jpg';
import service3 from '../Assets/service3.jpg';
import service4 from '../Assets/service4.jpg';

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-serif text-blue-600">What Can We Do Together</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 mb-8">
              <Tab className="text-lg font-medium p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-all">Couple Counseling</Tab>
              <Tab className="text-lg font-medium p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-all">Parenting Skills</Tab>
              <Tab className="text-lg font-medium p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-all">Feeling Stuck</Tab>
              <Tab className="text-lg font-medium p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-all">Self-Confidence</Tab>
            </TabList>

            <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg font-serif">
                <h3 className="text-3xl font-semibold text-green-400 mb-4">Couple Counseling</h3>
                <p className="mb-8 text-gray-600">
                  We are here to help you navigate your health concerns with personalized and professional guidance.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Improving Communication Skills</li>
                  <li>Strengthening Emotional Connections</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={service1} alt="Couple Counseling" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg font-serif">
                <h3 className="text-3xl font-semibold text-green-400 mb-4">Parenting Skills</h3>
                <p className="mb-8 text-gray-600">
                  We provide personalized and compassionate counseling to help you strengthen your parenting abilities and create a healthy family dynamic.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Child Behavior</li>
                  <li>Improving Communication with Your Kids</li>
                  <li>Effective Discipline Strategies</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={service2} alt="Parenting Skills" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg font-serif">
                <h3 className="text-3xl font-semibold text-green-400 mb-4">Feeling Stuck</h3>
                <p className="mb-8 text-gray-600">
                  If you're feeling lost or overwhelmed, we offer professional guidance to help you regain your sense of purpose and direction.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Clarifying Life Goals</li>
                  <li>Reducing Anxiety and Stress</li>
                  <li>Improving Emotional Resilience</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={service3} alt="Feeling Stuck" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12 shadow-lg font-serif">
                <h3 className="text-3xl font-semibold text-green-400 mb-4">Self Confidence</h3>
                <p className="mb-8 text-gray-600">
                  We help you build self-confidence and develop the mindset to overcome personal challenges and achieve your goals.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Improving Self-Worth</li>
                  <li>Overcoming Negative Thoughts</li>
                  <li>Building Assertiveness</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={service4} alt="Self Confidence" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
