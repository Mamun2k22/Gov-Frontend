import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Notice from "./Notice";

const MainContent = () => {
  return (
    <div className="mt-5 ">
      <div className="main flex flex-col lg:flex-row space-x-0 lg:space-x-8 ">
        <div className="w-full lg:w-[80%] order-1">
      <Notice/>
          <div className="flex justify-between bg-[#F5F5F5] py-5 px-4 mt-6">
            <h1 className="text-xl font-medium">খবর</h1>
            <p>সকল </p>
          </div>

          {/* আমাদের সম্পর্কে */}
          <div className="flex flex-col lg:flex-row md:gap-9 gap-5">
            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 mt-6 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                আমাদের সম্পর্কে
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2">
                <div class="mr-0 sm:mr-4 mb-4 sm:mb-0">
                  <div class="bg-green-200 w-20 h-20 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/9d5c511b_2897_4bab_a16d_d6a99f073591/3d6e217b13819c3f15d411b09c5b4fb6.png"
                      alt=""
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>জেলা প্রশাসক</li>
                    <li>কর্মকর্তাদের তালিকা</li>
                    <li>বাংলাদেশ-ডিরেক্টরি (এনড্রেড)</li>
                    <li>জেলা-বৃত্তান্ত</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 md:mt-6 mt-0 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2 sm:items-start">
                <div class="mb-4 sm:mb-0 sm:mr-4">
                  <div class="w-24 h-24 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/4fc90cb5_b87d_41bb_9ec2_68f249dd398c/9d00b6a9b6a1b831600d1b9f43112656.png"
                      alt="Icon"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>সেবা প্রদান প্রতিশ্রুতি</li>
                    <li>সেবা প্রদান প্রতিশ্রুতির অনুমোদিত ফরম্যাট</li>
                    <li>ফোকাল পয়েন্ট কর্মকর্তা</li>
                    <li>আইন/বিধি/নীতিমালা/পরিপত্র</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row md:gap-9 gap-5">
            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 mt-6 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">তথ্য অধিকার</h2>
              <div class="flex items-start space-x-4 lg:space-x-2">
                <div class="mr-0 sm:mr-4 mb-4 sm:mb-0">
                  <div class="bg-green-200 w-20 h-20 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/ad6ed3fc_d101_49f1_920b_68744bd79626/d68d8379bc3e264cfe39b9e394e70a30.png"
                      alt=""
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ</li>
                    <li>আবেদন ও আপিল ফরম</li>
                    <li>আইন/বিধি/কৌশল</li>
                    <li> প্রশিক্ষণ ও নির্দেশিকা</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 md:mt-6 mt-0 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                অভিযোগ প্রতিকার ব্যবস্থা
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2 sm:items-start">
                <div class="mb-4 sm:mb-0 sm:mr-4">
                  <div class="w-24 h-24 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/985b019d_3e2a_4d0e_8123_81cff8059abf/cd8c705968e866d494176b85fde0f644.png"
                      alt="Icon"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>অনিক ও আপিল কর্মকর্তা</li>
                    <li> নীতিমালা/নির্দেশিকা/পরিপত্র</li>
                    <li> অভিযোগ প্রতিকার ব্যবস্থা</li>
                    <li> অনলাইনে অভিযোগ দাখিল</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row md:gap-9 gap-5">
            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 mt-6 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                কর্মসম্পাদন ব্যবস্থাপনা
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2">
                <div class="mr-0 sm:mr-4 mb-4 sm:mb-0">
                  <div class="bg-green-200 w-20 h-20 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/uploads/7459596b-6034-4a8e-8010-866cc1b111dc//64f/ea7/256/64fea7256eb98373513790.png"
                      alt=""
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li> পরিপত্র,নীতিমালা ও চুক্তির কাঠামো</li>
                    <li> চুক্তি ও ত্রৈমাসিক অর্জন</li>
                    <li> বার্ষিক মূল্যায়ন প্রতিবেদন</li>
                    <li> এপিএ জেলা কমিটি ও এপিএ টিম</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 md:mt-6 mt-0 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">শুদ্ধাচার</h2>
              <div class="flex items-start space-x-4 lg:space-x-2 sm:items-start">
                <div class="mb-4 sm:mb-0 sm:mr-4">
                  <div class="w-24 h-24 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/e5c51f6d_970c_4810_998b_ce4d3dc4ec83/ddd91bfb749e9ca39219cc0f722ec591.png"
                      alt="Icon"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>বার্ষিক কর্ম-পরিকল্পনা চুক্তি ও অর্জনসমূহ</li>
                    <li>
                      {" "}
                      দায়িত্বপ্রাপ্ত কর্মকর্তা ও বিকল্প কর্মকর্তা (জাতীয়
                      শুদ্ধাচার কৌশল)
                    </li>
                    <li> শুদ্ধাচার পুরস্কার প্রাপ্তদের তালিকা ও উত্তম চর্চা</li>
                    <li> নীতিমালা,প্রজ্ঞাপন ও পরিপত্র</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row md:gap-9 gap-5">
            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 mt-6 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                নিরাপত্তা ও শৃঙ্খলা
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2">
                <div class="mr-0 sm:mr-4 mb-4 sm:mb-0">
                  <div class="bg-green-200 w-20 h-20 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/www.bagerhat.gov.bd/front_service_box/e7f84819_230c_441e_a430_1301812f1e04/4d15742cea930cacc3cb2fbc66b31acf.png"
                      alt=""
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li> অপরাধের তথ্য দিন</li>
                    <li> পুলিশি সহায়তা</li>
                    <li> মোবাইলে ফায়ার সার্ভিস</li>
                    <li> অনলাইনে ফায়ার লাইসেন্স</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 md:mt-6 mt-0 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                কৃষি, মৎস্য ও প্রাণি-সেবা
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2 sm:items-start">
                <div class="mb-4 sm:mb-0 sm:mr-4">
                  <div class="w-24 h-24 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/e5c51f6d_970c_4810_998b_ce4d3dc4ec83/ddd91bfb749e9ca39219cc0f722ec591.png"
                      alt="Icon"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>কৃষি-সেবা</li>
                    <li>মৎস্য ও প্রাণি-সেবা</li>
                    <li>মোবাইলে মৎস্য ও প্রাণি-সেবা</li>
                    <li> মোবাইলে কৃষি সেবা</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row md:gap-9 gap-5">
            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 mt-6 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                নিরাপত্তা ও শৃঙ্খলা
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2">
                <div class="mr-0 sm:mr-4 mb-4 sm:mb-0">
                  <div class="bg-green-200 w-20 h-20 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/bagerhat.gov.bd/front_service_box/adf0e072_3855_4350_b7e5_47f7ba467418/44d8a5d1a08ab5c4661edb9556965be6.png"
                      alt=""
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>৩৩৩ থেকে তথ্য-সেবা</li>
                    <li>কল সেন্টারসমূহ</li>
                    <li>হেল্পডেস্ক</li>
                    <li>ফোনে ডাক্তারের সেবা</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] border border-gray-300 rounded shadow-lg md:p-6 p-4 md:mt-6 mt-0 bg-white mx-auto">
              <h2 class="text-lg font-bold text-gray-700 mb-4">
                আইন/নীতিমালা/প্রজ্ঞাপন/পরিপত্র
              </h2>
              <div class="flex items-start space-x-4 lg:space-x-2 sm:items-start">
                <div class="mb-4 sm:mb-0 sm:mr-4">
                  <div class="w-24 h-24 flex items-center justify-center">
                    <img
                      src="https://file-khulna.portal.gov.bd/files/www.bagerhat.gov.bd/front_service_box/7e93d7f7_067b_4cc6_8bad_d6141850ddaf/8cc4a82c11610c92050400d98ca9588e.png"
                      alt="Icon"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <ul class="list-disc text-gray-700 pl-4">
                    <li>বিভিন্ন প্রকার নীতিমালা/প্রজ্ঞাপন</li>
                    <li>আইন ও বিধি</li>
                    <li>নীতিমালা</li>
                    <li>নিয়োগ বিধি</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[20%] order-2">
          <img
            src="https://file.portal.gov.bd/media/central/bkkb_button_bn.png"
            alt=""
            srcset=""
          />
          <img
            className="mt-5"
            src="https://file.portal.gov.bd/media/central/uploaded-files/Bangladesh-Directory.jpg"
            alt=""
            srcset=""
          />
          <div class="w-full bg-green-700 py-2 text-center mt-5">
            <h1 class="text-white text-base font-semibold">MoPA ওয়েবসাইট</h1>
          </div>

          <div class="w-full bg-[#3498DB] py-4 p-2  mt-5">
            <h1 class="text-white text-sm font-medium">
              জেলা প্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট
            </h1>
          </div>
          <img
            className="mt-5"
            src="https://file-khulna.portal.gov.bd/media/7459596b-6034-4a8e-8010-866cc1b111dc/uploaded-files/DC%20SIR.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
