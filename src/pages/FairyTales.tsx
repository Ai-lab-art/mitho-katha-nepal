
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fairyTales } from "@/data/fairyTales";

const FairyTales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-purple-700 hover:text-purple-800 hover:bg-purple-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            घर फर्कनुहोस्
          </Button>
          <h1 className="text-3xl font-bold text-purple-800">परीकथाहरूको सूची</h1>
          <div></div>
        </div>

        {/* Fairy Tales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fairyTales.map((tale, index) => (
            <Card 
              key={tale.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-200 hover:border-purple-400 bg-white/90 backdrop-blur-sm"
              onClick={() => navigate(`/fairytale/${tale.id}`)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-purple-800 text-xl mb-2 group-hover:text-purple-900">
                      {index + 1}. {tale.title}
                    </CardTitle>
                    <CardDescription className="text-purple-600 text-sm">
                      {tale.summary}
                    </CardDescription>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-2xl">{tale.emoji}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-purple-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{tale.duration} मिनेट</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>पढ्नुहोस्</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8">
          <p className="text-purple-600 text-sm font-medium">
            संकलन तथा एप निर्माण: होम बहादुर थापा
          </p>
        </div>
      </div>
    </div>
  );
};

export default FairyTales;
