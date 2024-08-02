'use client';
import React, { useState } from 'react';
import AiReply from './components/AiReply';

export default function Index() {
  return (
    <>
      <div className="w-full h-screen fixed top-0	left-0">
        <div
          className="fixed top-0	right-0"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <AiReply />
          </div>
        </div>
      </div>
    </>
  );
}
