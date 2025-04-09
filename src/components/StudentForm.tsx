import React, { useState } from 'react';
import { StudentData } from '../types';
import { Upload, User, Hash, BookOpen, AlertCircle, Box, Bus } from 'lucide-react';

const CLASS_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const DIVISION_OPTIONS = ['A', 'B', 'C', 'D'];
const ALLERGY_OPTIONS = ['Peanuts', 'Dairy', 'Eggs', 'Gluten', 'Shellfish'];
const BUS_ROUTES = ['R1', 'R2', 'R3', 'R4', 'R5'];

interface Props {
  onSubmit: (data: StudentData) => void;
}

export default function StudentForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<StudentData>({
    name: '',
    rollNumber: '',
    class: CLASS_OPTIONS[0],
    division: DIVISION_OPTIONS[0],
    allergies: [],
    photo: '',
    rackNumber: '',
    busRoute: BUS_ROUTES[0],
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      rollNumber: '',
      class: CLASS_OPTIONS[0],
      division: DIVISION_OPTIONS[0],
      allergies: [],
      photo: '',
      rackNumber: '',
      busRoute: BUS_ROUTES[0],
    })
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border border-indigo-100">
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 text-indigo-500" />
              <span>Name</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter student name"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Hash className="h-4 w-4 text-indigo-500" />
              <span>Roll Number</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.rollNumber}
              onChange={e => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
              placeholder="Enter roll number"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="h-4 w-4 text-indigo-500" />
              <span>Class</span>
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.class}
              onChange={e => setFormData(prev => ({ ...prev, class: e.target.value }))}
            >
              {CLASS_OPTIONS.map(opt => (
                <option key={opt} value={opt}>Class {opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="h-4 w-4 text-indigo-500" />
              <span>Division</span>
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.division}
              onChange={e => setFormData(prev => ({ ...prev, division: e.target.value }))}
            >
              {DIVISION_OPTIONS.map(opt => (
                <option key={opt} value={opt}>Division {opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <AlertCircle className="h-4 w-4 text-indigo-500" />
            <span>Allergies</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ALLERGY_OPTIONS.map(allergy => (
              <label key={allergy} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-indigo-200 cursor-pointer transition-all duration-200">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={formData.allergies.includes(allergy)}
                  onChange={e => {
                    const newAllergies = e.target.checked
                      ? [...formData.allergies, allergy]
                      : formData.allergies.filter(a => a !== allergy);
                    setFormData(prev => ({ ...prev, allergies: newAllergies }));
                  }}
                />
                <span className="text-sm text-gray-700">{allergy}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Upload className="h-4 w-4 text-indigo-500" />
            <span>Photo</span>
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex-1 flex items-center justify-center px-6 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 cursor-pointer transition-all duration-200">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <span className="text-indigo-600 font-medium">Click to upload</span> or drag and drop
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} required />
            </label>
            {formData.photo && (
              <img src={formData.photo} alt="Preview" className="h-24 w-24 object-cover rounded-lg border-2 border-indigo-200" />
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Box className="h-4 w-4 text-indigo-500" />
              <span>Rack Number</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.rackNumber}
              onChange={e => setFormData(prev => ({ ...prev, rackNumber: e.target.value }))}
              placeholder="Enter rack number"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Bus className="h-4 w-4 text-indigo-500" />
              <span>Bus Route</span>
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={formData.busRoute}
              onChange={e => setFormData(prev => ({ ...prev, busRoute: e.target.value }))}
            >
              {BUS_ROUTES.map(route => (
                <option key={route} value={route}>Route {route}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
        >
          Generate ID Card
        </button>
      </div>
    </form>
  );
}