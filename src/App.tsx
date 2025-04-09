import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import StudentForm from './components/StudentForm';
import IDCard from './components/IDCard';
import { StudentData, Template } from './types';
import { Download, School } from 'lucide-react';

function App() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [template, setTemplate] = useState<Template>('modern');
  const cardRef = useRef<HTMLDivElement>(null);
  const [savedCards, setSavedCards] = useState<StudentData[]>(() => {
    const saved = localStorage.getItem('savedCards');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSubmit = (data: StudentData) => {
    const isDuplicate = savedCards.some(
      (card) => card.name === data.name && card.class === data.class && card.division === data.division
    );

    if (!isDuplicate) {
      const newSavedCards = [data, ...savedCards];
      setSavedCards(newSavedCards);
      localStorage.setItem('savedCards', JSON.stringify(newSavedCards));
    }

    setStudentData(data);
  };


  const downloadCard = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current, {
        backgroundColor: undefined,
        style: {
          width: cardRef.current.offsetWidth + 'px',
          height: cardRef.current.offsetHeight + 'px'
        }
      });
      const link = document.createElement('a');
      link.download = `student-id-${studentData?.name}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="bg-white shadow-lg border-b border-indigo-100">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex items-center space-x-3">
            <School className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Student ID Generator
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <StudentForm onSubmit={handleSubmit} />

            {savedCards.length > 0 && (
              <div className="bg-white rounded-xl shadow-xl p-6 border border-indigo-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Previously Generated Cards</h2>
                <div className="space-y-3">
                  {savedCards.map((card, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-200">
                      <div>
                        <p className="font-medium text-gray-900">{card.name}</p>
                        <p className="text-sm text-gray-600">Class {card.class}-{card.division}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => setStudentData(card)}
                          className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            const deletedCard = savedCards[index];
                            const updated = savedCards.filter((_, i) => i !== index);
                            setSavedCards(updated);
                            localStorage.setItem('savedCards', JSON.stringify(updated));

                            // Clear the IDCard view if the deleted card is currently being viewed
                            if (
                              studentData &&
                              studentData.name === deletedCard.name &&
                              studentData.class === deletedCard.class &&
                              studentData.division === deletedCard.division
                            ) {
                              setStudentData(null);
                            }
                          }}
                          className="text-red-500 px-4 py-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                        >
                          Delete
                        </button>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {studentData && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-xl p-4 border border-indigo-100">
                <div className="flex items-center justify-between">
                  <select
                    value={template}
                    onChange={(e) => setTemplate(e.target.value as Template)}
                    className="px-4 py-2 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="modern">Modern Template</option>
                    <option value="classic">Classic Template</option>
                    <option value="minimal">Minimal Template</option>
                  </select>

                  <button
                    onClick={downloadCard}
                    className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download PNG</span>
                  </button>
                </div>
              </div>

              <IDCard
                data={studentData}
                template={template}
                cardRef={cardRef}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;