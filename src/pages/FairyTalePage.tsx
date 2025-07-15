
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { fairyTales } from "@/data/fairyTales";
import { useState } from "react";

const FairyTalePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  
  const tale = fairyTales.find(t => t.id === id);
  
  if (!tale) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">परीकथा फेला परेन</h2>
          <Button onClick={() => navigate('/fairytales')}>
            परीकथाहरूको सूचीमा फर्कनुहोस्
          </Button>
        </Card>
      </div>
    );
  }

  const totalPages = tale.content.length;
  const currentContent = tale.content[currentPage];

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/fairytales')}
            className="text-purple-700 hover:text-purple-800 hover:bg-purple-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            सूचीमा फर्कनुहोस्
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-800">{tale.title}</h1>
            <p className="text-purple-600 text-sm">{currentPage + 1} / {totalPages}</p>
          </div>
          <div className="w-32"></div>
        </div>

        {/* Tale Content */}
        <div className="relative">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-purple-200">
            <CardContent className="p-8">
              {/* Tale Image */}
              <div className="text-center mb-8">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-8xl">{tale.emoji}</span>
                </div>
                <p className="text-purple-600 text-sm mt-2 italic">{currentContent.imageCaption}</p>
              </div>

              {/* Tale Text */}
              <div className="prose prose-lg max-w-none">
                <div className="text-purple-900 leading-relaxed text-lg space-y-4">
                  {currentContent.text.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button 
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            अघिल्लो पृष्ठ
          </Button>

          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">
              {tale.duration} मिनेट पढाइ
            </span>
          </div>

          <Button 
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            अर्को पृष्ठ
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-purple-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairyTalePage;
