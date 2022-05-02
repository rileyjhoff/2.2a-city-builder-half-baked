import React from 'react';

export default function Dropdown({ dropdown, setId }) {
  return (
    <div>
      Select a {dropdown === 'waterfront' && 'Waterfront'}
      {dropdown === 'skyline' && 'Skyline'}
      {dropdown === 'castle' && 'Castle'}
      <select onChange={(e) => setId(e.target.value)}>
        <option value="1">
          {dropdown === 'waterfront' && 'Dock'}
          {dropdown === 'skyline' && 'Pink'}
          {dropdown === 'castle' && 'Serious'}
        </option>
        <option value="2">
          {dropdown === 'waterfront' && 'Sunset'}
          {dropdown === 'skyline' && 'Busy'}
          {dropdown === 'castle' && 'Mysterious'}
        </option>
        <option value="3">
          {dropdown === 'waterfront' && 'Boats'}
          {dropdown === 'skyline' && 'Foggy'}
          {dropdown === 'castle' && 'Regal'}
        </option>
      </select>
    </div>
  );
}
