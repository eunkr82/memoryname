import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import '../App.css';
import './test.css';

const questions = [
    {
      question: "새학기를 준비하는 수강신청, 나는",
      options: { 
        A: { script: '들어야 하는 강의를 신청한다', trait: '서미경', score: 1 }, 
        B: { script: '듣고 싶은 강의를 신청한다', trait: '황은재', score: 3 } 
        }
    },
    {
      question: "새학기의 첫 시작인 개강날, 나는",
      options: { 
        A: { script: '화끈하게 출석하지 않는다', trait: '최이현', score: 3 }, 
        B: { script: '교수님께 얼굴도장을 찍으러 간다', trait: '민재현', score: 5 } 
        }
    },
    {
      question: "수업을 들을 때, 나는",
      options: { 
        A: { script: '무조건 뒷자리를 사수한다', trait: '최이현', score: 1 },
        B: { script: '무조건 앞자리를 사수한다', trait: '서미경', score: 5 } 
        }
    },
    {
      question: "수업 사이 공강 시간, 나는",
      options: { 
        A: { script: '동기들과 다같이 시간을 보낸다', trait: '민재현', score: 3 }, 
        B: { script: '친한 친구와 단둘이 있는다', trait: '서미경', score: 3 } 
        }
    },
    {
      question: "꿀같은 휴일, 나는",
      options: { 
        A: { script: '활동적인 액티비티를 즐긴다', trait: '최이현', score: 5 }, 
        B: { script: '조용히 사색하며 보낸다', trait: '황은재', score: 1 } 
        }
    },
    {
      question: "드디어 방학이다! 나는",
      options: {
        A: { script: '학교 외부 대외활동을 시도한다', trait: '민재현', score: 1 }, 
        B: { script: '관심있던 교수님의 랩실에 들어간다', trait: '황은재', score: 5 }
        }
    }
  ];

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ 서미경: 0, 황은재: 0, 최이현: 0, 민재현: 0 });
    const navigate = useNavigate();
    

    const handleAnswer = (option) => {
        const selectedOption = questions[currentQuestion].options[option];
        const updatedScores = { ...scores, [selectedOption.trait]: scores[selectedOption.trait] + selectedOption.score };
        setScores(updatedScores);
    
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          const topTrait = Object.keys(updatedScores).reduce((a, b) => updatedScores[a] > updatedScores[b] ? a : b);
          navigate('/test-result', { state: { result: topTrait } });
        }
      };

    return (
        <div className="test" style={{ overflow: 'hidden', height: '100vh'}}>
            <ProgressBar currentStep={currentQuestion} />
            <div className="container">
                <div className="question">
                    <div className="question-text">
                        {questions[currentQuestion].question}
                    </div>
                    <hr />
                </div>
                <div className="selection">
                    <div className="selAB">
                        <div>A</div>
                        <div>B</div>
                    </div>
                    <div className="selButton-wrap">
                        <button className='selButton' onClick={() => handleAnswer('A')}>{questions[currentQuestion].options.A.script}</button>
                        <button className='selButton' onClick={() => handleAnswer('B')}>{questions[currentQuestion].options.B.script}</button>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Test;