import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { StudentData, Template } from '../types';
import { School, Bus, Box, MapPin, Phone, Globe } from 'lucide-react';

interface Props {
  data: StudentData;
  template: Template;
  cardRef: React.RefObject<HTMLDivElement>;
}

export default function IDCard({ data, template, cardRef }: Props) {
  const ModernTemplate = () => (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl text-white shadow-2xl w-[400px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-32 -translate-x-32" />

      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <School className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold">Unity School</h1>
              <p className="text-sm opacity-75">Excellence in Education</p>
            </div>
          </div>
          <div className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full">ID Card</div>
        </div>

        <div className="flex space-x-6">
          <img
            src={data.photo}
            alt={data.name}
            className="w-32 h-32 rounded-xl object-cover ring-4 ring-white/20"
          />

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <p className="text-sm opacity-75">Roll No: {data.rollNumber}</p>
            <p className="text-sm opacity-75">Class: {data.class}-{data.division}</p>
            {data.allergies.length > 0 && (
              <div className="text-sm">
                <span className="opacity-75">Allergies:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {data.allergies.map(allergy => (
                    <span key={allergy} className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Box className="h-4 w-4" />
              <span>Rack: {data.rackNumber}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Bus className="h-4 w-4" />
              <span>Route: {data.busRoute}</span>
            </div>
          </div>
          <QRCodeSVG
            value={data.rollNumber}
            size={80}
            level="H"
            className="bg-white rounded-xl p-1"
          />
        </div>
      </div>
    </div>
  );

  const ClassicTemplate = () => (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-[500px] border-8 border-blue-700">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <School className="h-12 w-12 text-blue-700" />
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Unity School</h1>
            <p className="text-sm text-blue-600">Established 1995</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 flex items-center justify-center space-x-4">
          <span className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" /> 123 Education St.
          </span>
          <span className="flex items-center">
            <Phone className="h-4 w-4 mr-1" /> (555) 123-4567
          </span>
          <span className="flex items-center">
            <Globe className="h-4 w-4 mr-1" /> unity.edu
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <img
            src={data.photo}
            alt={data.name}
            className="w-36 h-36 rounded-full object-cover ring-8 ring-blue-100"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
            Student
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-blue-700 font-medium">Roll No: {data.rollNumber}</p>
          <p className="text-gray-600">Class: {data.class}-{data.division}</p>
        </div>
      </div>

      {data.allergies.length > 0 && (
        <div className="mt-6 text-center">
          <span className="text-sm font-medium text-gray-700">Medical Alert:</span>
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {data.allergies.map(allergy => (
              <span key={allergy} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                {allergy}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between text-gray-700 border-t border-gray-200 pt-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Box className="h-4 w-4 text-blue-700" />
            <span>Rack: {data.rackNumber}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Bus className="h-4 w-4 text-blue-700" />
            <span>Route: {data.busRoute}</span>
          </div>
        </div>
        <QRCodeSVG
          value={data.rollNumber}
          size={80}
          level="H"
          className="bg-white rounded-lg p-1 border-2 border-blue-100"
        />
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg w-[400px]">
      <div className="flex items-center justify-between mb-8">
        <School className="h-8 w-8 text-gray-400" />
        <div className="text-xs font-medium text-gray-400 tracking-widest uppercase">Student ID</div>
      </div>

      <div className="flex items-start space-x-6">
        <img
          src={data.photo}
          alt={data.name}
          className="w-28 h-28 rounded-lg object-cover ring-4 ring-gray-100"
        />

        <div className="flex-1">
          <h2 className="text-xl font-medium text-gray-900">{data.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Roll No: {data.rollNumber}</p>
          <p className="text-sm text-gray-500">Class: {data.class}-{data.division}</p>

          {data.allergies.length > 0 && (
            <div className="mt-4">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Allergies</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {data.allergies.map(allergy => (
                  <span key={allergy} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Box className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Rack {data.rackNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bus className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Route {data.busRoute}</span>
          </div>
        </div>
        <QRCodeSVG
          value={data.rollNumber}
          size={80}
          level="H"
          className="rounded-lg"
        />
      </div>
    </div>
  );

  return (
    <div ref={cardRef} className="flex justify-center items-center p-8">
      {template === 'modern' ? <ModernTemplate /> :
        template === 'classic' ? <ClassicTemplate /> :
          <MinimalTemplate />}
    </div>
  );
}