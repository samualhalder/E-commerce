import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser } from '../../auth/authSlice';

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  return (
    <div>
    <div>
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            {/* Name: {user.name ? user.name:'Gaust'} */}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            {/* Email: {user.email ? user.email:""} */}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">
            Address :
          </p>
          
        </div>
      </div>
    </div>
  </div>
  );
}
