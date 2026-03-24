import React from "react";

const TeamMemberPage = ({ member, onBack }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img src={member.photo} alt={`${member.name}'s photo`} style={styles.memberPhoto} />
        </div>
        <h2 style={styles.memberName}>{member.name}</h2>
        <p style={styles.memberDetermination}>"{member.determination}"</p>
        <div style={styles.memberInfoContainer}>
          <p style={styles.memberInfo}><strong>나이:</strong> {member.age}</p>
          <p style={styles.memberInfo}><strong>전공:</strong> {member.major}</p>
          <p style={styles.memberInfo}><strong>포지션:</strong> {member.role}</p>
        </div>
      </div>
      <button
        style={styles.backButton}
        onClick={onBack}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFC700')} // 마우스 오버 시 진한 노란색
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FEE500')} // 마우스 내릴 시 카카오 색으로 돌아옴
      >
        &larr; Back to Main
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // 컨테이너를 중앙으로
    alignItems: "center",
    background: "linear-gradient(135deg, #f7f9fc, #e1f5fe)", // 부드러운 그라데이션 배경
  },
  card: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "350px",
  },
  imageContainer: {
    marginBottom: "20px",
  },
  memberPhoto: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  memberName: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  memberDetermination: {
    fontSize: "16px",
    fontWeight: "bold", // 각오를 볼드체로
    color: "#555",
    marginBottom: "30px",
  },
  memberInfoContainer: {
    textAlign: "left",
    marginLeft: "20px", // 왼쪽 정렬을 더 부각
  },
  memberInfo: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "10px",
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "#FEE500", // 카카오 색상
    color: "#000000", // 텍스트는 검은색
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
  },
};

export default TeamMemberPage;
