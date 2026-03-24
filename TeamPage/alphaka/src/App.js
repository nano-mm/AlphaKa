import React, { useState } from "react";
import MainPage from "./MainPage";
import TeamMemberPage from "./TeamMemberPage";
import photo1 from './1.jpg';
import photo2 from './2.jpeg';
import photo3 from './3.jpeg';
import photo4 from './4.jpeg';
import photo5 from './5.jpeg';
import photo6 from './6.jpeg';
import photo7 from './7.jpeg';

const teamMembers = [
  { id: 1, name: "박주혁", age: "27", major: "인공지능", role: "PM", determination: "오직 코딩", photo: photo1},
  { id: 2, name: "임호준", age: "25", major: "영미어문학과", role: "PL", determination: "직접 하면서 배우자", photo: photo2},
  { id: 3, name: "박준한", age: "27", major: "컴퓨터공학과", role: "FrontEnd", determination: "팀 이름값 할 수 있도록 노력하겠습니다!", photo: photo3},
  { id: 4, name: "임찬호", age: "27", major: "소프트웨어", role: "BackEnd", determination: "프로젝트를 통해 개발 실력 상승", photo: photo4},
  { id: 5, name: "김기훈", age: "25", major: "금융수학", role: "FrontEnd", determination: "화이팅!", photo: photo5},
  { id: 6, name: "나은비", age: "23", major: "컴퓨터공학과", role: "AI&BackEnd", determination: "매일 노트북을 키자", photo: photo6},
  { id: 7, name: "손성민", age: "26", major: "소프트웨어", role: "FrontEnd", determination: "seize the day!", photo: photo7},
];

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (id) => {
    const member = teamMembers.find((member) => member.id === id);
    setSelectedMember(member);
  };

  const handleBackToMain = () => {
    setSelectedMember(null);
  };

  return (
    <div>
      {selectedMember ? (
        <TeamMemberPage member={selectedMember} onBack={handleBackToMain} />
      ) : (
        <MainPage teamMembers={teamMembers} onMemberClick={handleMemberClick} />
      )}
    </div>
  );
}

export default App;
