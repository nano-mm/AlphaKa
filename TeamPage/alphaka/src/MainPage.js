import React from "react";
import teamPicture from "./team2.jpeg"; // 팀 사진 import
import logo from "./teamlogo.png"; // 팀 로고 import

const MainPage = ({ teamMembers, onMemberClick }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={logo} alt="Team Logo" style={styles.logoImage} /> {/* 팀 로고 */}
        <h1 style={styles.teamName}>AlphaKa</h1> {/* 팀 이름 */}
      </div>

      <img src={teamPicture} alt="Team" style={styles.teamImage} /> {/* 팀 사진 */}

      <h3 style={styles.catchphrase}>
        "AlphaKa, Soft like Alpaca, Strong like Alpha"
      </h3> {/* 캐치프라이즈 */}

      <h2 style={styles.title}>MEMBER</h2>
      <div style={styles.memberList}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={styles.memberItem}
            onClick={() => onMemberClick(member.id)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFC700')} // 더 진한 노란색으로 변경
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FEE500')} // 카카오 노랑으로 돌아옴
          >
            <p style={styles.memberName}>{member.name}</p>
            <p style={styles.memberRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { 
    textAlign: "center", 
    padding: "20px", 
    backgroundColor: "#E0F7FA", // 팀 소개 페이지와 어울리는 파스텔톤 배경
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "20px", // 로고와 팀 이름을 조금 더 아래로 내림
  },
  logoImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "15px", // 팀 이름과의 간격 조정
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 살짝 그림자 효과
  },
  teamName: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#333",
    margin: 0,
  },
  teamImage: {
    width: "80%",
    maxWidth: "800px", // 화면에 맞게 조정되도록 설정
    height: "auto", // 높이는 자동으로 조정
    objectFit: "cover",
    borderRadius: "10px", // 둥근 모서리
    marginBottom: "20px", // 캐치프라이즈와 간격 조정
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
  },
  catchphrase: {
    fontStyle: "italic", // 캐치프라이즈를 이탤릭체로
    color: "#555",
    marginBottom: "30px", // 팀원 목록과의 간격 조정
  },
  title: {
    fontSize: "1.8em",
    marginBottom: "20px",
    color: "#333",
  },
  memberList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px", // 팀원들 간의 간격을 더 조정
  },
  memberItem: {
    cursor: "pointer",
    padding: "10px 15px", // 패딩을 줄여서 버튼 크기 감소
    backgroundColor: "#FEE500", // 기본 카카오 노랑색
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease", // 애니메이션 추가
    width: "120px", // 버튼의 크기를 더 줄임
  },
  memberName: {
    fontSize: "1.1em", // 이름의 폰트 크기를 살짝 줄임
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  memberRole: {
    fontSize: "0.9em", // 역할의 폰트 크기를 더 줄임
    color: "#777",
  },
};

export default MainPage;
