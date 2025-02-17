import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Save } from "lucide-react";

const InterviewTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [notes, setNotes] = useState("");

  const questions = [
    {
      id: "intro",
      text: "👋 Start with: 'Thank you for participating. This interview is about your relationship with technology. May I record our conversation?'",
      prompts: [
        "Wait for verbal consent before proceeding",
        "Start recording if permitted",
      ],
    },
    {
      id: "demographics",
      text: "Background Information",
      prompts: [
        "What is your age?",
        "What is/was your occupation?",
        "Where do you live? Where did you grow up?",
        "What is your level of formal education?",
      ],
    },
    {
      id: "tech_general",
      text: "General Technology Feelings",
      prompts: [
        "How do you generally feel about using new technology?",
        "What makes you feel this way?",
        "Has this changed over time?",
      ],
    },
    {
      id: "good_tech",
      text: "Positive Technology Experience",
      prompts: [
        "Can you tell me about a piece of technology you enjoy using?",
        "Did you like it right away or did it grow on you?",
        "What made it easy/difficult to learn?",
        "Did it replace something else you used before?",
      ],
    },
    {
      id: "pain_points",
      text: "Challenges and Improvements",
      prompts: [
        "Are there any aspects you find challenging?",
        "What would make it better?",
        "Is there anything missing that you wish it had?",
        "Is there anything you'd remove or simplify?",
      ],
    },
    {
      id: "bad_tech",
      text: "Difficult Technology Experience",
      prompts: [
        "Can you tell me about a piece of technology you find difficult to use?",
        "What makes it challenging?",
        "Have you found any ways to make it easier?",
        "Would you prefer an alternative solution?",
      ],
    },
    {
      id: "learning",
      text: "Learning Preferences",
      prompts: [
        "How do you prefer to learn new technology?",
        "What about:",
        "- Written instructions?",
        "- Video tutorials?",
        "- One-on-one help?",
        "- Trial and error?",
      ],
    },
    {
      id: "emotions",
      text: "Emotional Impact",
      prompts: [
        "How does the prospect of learning new technology make you feel?",
        "Why do you think you feel this way?",
        "What would make you feel more confident?",
      ],
    },
    {
      id: "conclusion",
      text: "Wrap-up",
      prompts: [
        "Is there anything else you'd like to share about your experience with technology?",
        "Thank them for their time",
        "Stop recording",
        "Save your notes",
      ],
    },
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    setResponses({
      ...responses,
      [questions[currentStep].id]: e.target.value,
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          Step {currentStep + 1} of {questions.length}:{" "}
          {questions[currentStep].text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Ask about:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {questions[currentStep].prompts.map((prompt, index) => (
                <li key={index} className="text-gray-700">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Notes for this section:</label>
            <textarea
              className="w-full h-32 p-2 border rounded-md"
              value={responses[questions[currentStep].id] || ""}
              onChange={handleNotesChange}
              placeholder="Take notes here..."
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === questions.length - 1}
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterviewTool;
