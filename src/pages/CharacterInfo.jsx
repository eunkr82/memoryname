import React from "react";
import styles from "./CharacterInfo.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const profiles = [
    { imgSrc: require("../assets/choi.png"), text: '최이현', details:"최이현. 한국대 88학번. 개명 전 이름 최현. 현 인권동행연대 대표, 그 전에는 여성운동의 선구자, 더 전에는 노동운동가, 그 시작점은 한국대학교 총여학생회였다. 지금으로부터 이십여 년 전인 1990년, 한국대학교 총여학생회에는 네 사람이 있었다. 회장 최현, 기획부장 윤영주, 재정부장 서미경, 선전부장 황은재. 신념과 자유를 소리높여 외칠 수 있고 뜻을 함께하는 친구들이 있는 최고의 시절이었다. 현과 절친한 사이였던 영주의 죽음 이후, 현은 운동에 회의를 느끼고 하나둘씩 떠나가는 친구들을 보았다. 그들의 외면과 변절을 그 자리에서 지켜볼 수밖에 없었다. 그렇지만 자신은 떠날 수 없었다. 영주가 바랐던 세상을 볼 수 있을 때까지는 멈출 수 없다. 그 세상이 불가능한 소망일지라도. 그 자리에 여전히 혼자 남아있었다. 그러던 어느 날, 영주의 이야기를 찍고 싶다는 한 감독이 인터뷰를 요청해 온다. 아직 영주의 이야기를 궁금해하는 사람들이 있구나, 기꺼운 마음으로 인터뷰에 응했다. 그러나 과거를 회상할수록 현은 자신이 모르던 무언가 있을지도 모른다는 느낌을 받는다. 아주 중요한 사실이." },
    { imgSrc: require("../assets/seo.png"), text: '서미경', details: "서미경, 한국대 88학번, 현 3선 국회의원.처음부터 정치에 뜻이 있던 것은 아니었다. 순간의 결정 후 흘러오다 보니 어느덧 노련한 한 사람의 정치인이 되어 있었지만. 그 시작은 학창시절 친구를 따라 얼떨결에 들어가게 된 한국대 총여학생회까지 거슬러 올라간다.지금으로부터 이십여 년 전인 1990년, 한국대학교 총여학생회에는 네 사람이 있었다. 회장 최현, 기획부장 윤영주, 재정부장 서미경, 선전부장 황은재. 언제나 위태로웠던 시기는 결국 비극적인 결말을 맞았다.자신을 총여학생회로 이끈 절친했던 친구 영주의 죽음 직후, 분노를 못 이겨 열성적으로 학생운동에 매진한 한때도 있었다. 그러나 이내 모든 것에 염증을 느끼고 있던 차에 정계 입문 제의를 받고 민자당에 입당했다. 당면한 일에 열중하다 보니 시간은 무심히도 흘렀다.그렇게 바삐 지내던 중, 잊고 지내던 과거가 다시금 화두에 올랐다. 영주의 이야기가 도마 위에 올라 대중의 질낮은 관심에 파헤쳐지도록 둘 수는 없다. 물길을 통제하려면 막는 대신 방향을 바꿔야 한다. 여론을 유도할 마음으로 인터뷰에 응했지만 자신의 목적이 진정 그것뿐인지 묻는 작은 의문은 덮어두어도 사라지지 않는다." },
    { imgSrc: require("../assets/min.png"), text: '민재현', details: "민재현, 한국대 00학번, 바른필름 감독. 어릴 적부터 이야기를 좋아했다. 흥미를 자아내는 복합적인 인간들의 이야기. 언젠가 그런 이야기를 직접 만들어내고 싶다고 생각하다 보니 어느새 감독이 되었다. 한국대 측의 청탁으로 드디어 첫 다큐멘터리 입봉작의 기회를 잡았다. 신선한 주제부터 여론의 관심까지, 감독으로서 입지를 다지는 데 더할 나위 없이 좋은 기회다. 좋은 이야기, 팔리는 이야기를 만드는 데는 자신이 있었다. 젊은 운동가의 죽음과 남겨진 이들의 반목이라는 흥미로운 주제로는 더더욱. 그러나 점점 깊이 알아갈수록 혼란스럽기만 하다. 엇갈리는 진술과 왜곡된 기억 사이에서 진실이 무엇인지 혼란스럽고, 타인의 삶을 이야기한다는 것이 가능한지 혼란스럽다. 사라진 사람과 지나간 과거를 이야기에 담을 자격은 자신에게 주어진 것일까. 올바른 재현이란 존재할 수 있는 것일까. 말해져야 하는 것이 없다면, 그럼에도 말해야 한다면 무엇을 말해야 할까." },
    { imgSrc: require("../assets/hwang.png"), text: '황은재', details: "황은재, 한국대 88학번, 현 한국대 부교수.유년부터 지금까지 매진해 온 한 가지 주제가 있다면 앎 그 자체뿐이다. 시대의 흐름에 따라 어릴 적 자연히 사회주의에 관심을 가졌고, 학생운동에 직접 참여해 관찰하지 않을 이유가 없었다. 그렇게 한국대 총여학생회 활동을 시작했다.지금으로부터 이십여 년 전인 1990년, 한국대학교 총여학생회에는 네 사람이 있었다. 회장 최현, 기획부장 윤영주, 재정7부장 서미경, 선전부장 황은재. 선전부 활동은 흥미로웠으나 어느새 자신이 감당할 수 있는 범위를 넘어섰고 감당할 수 없는 일도 일어나 버렸다.그 일 뒤로 자신이 있어야 할 곳으로 돌아왔다. 대학원에 진학해 성실히 공부했고 그 결과 모교의 교수로 임용됐다. 자신이 알던 합리의 세계를 지배하는 이성적인 인과의 법칙대로. 목표를 모두 이뤘고 얻은 것들을 누리기만 하면 되는 삶이었다. 그러던 어느 날 아끼던 제자의 입에서 반갑지 않은 옛 이름이 들려온다. 자신의 삶에만 몰두하며 잊었다고 생각한 기억이 불청객처럼 찾아온다." }
  ];


const CharacterInfo = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    const openModal = (profile) => {
        setSelectedProfile(profile);
    };

    const closeModal = () => {
        setSelectedProfile(null);
    };

    return(
        <div className={styles.container}>
            <div className={styles.resultTitle}>
                <h2>테스트 결과</h2>
                <hr />
            </div>
            <div className={styles.profileList}>
                    {profiles.map((profile, index) => (
                        <div className={styles.profileWrap} key={index}>
                            <img 
                                src={profile.imgSrc} 
                                alt={`Profile ${index + 1}`} 
                                onClick={() => openModal(profile)} />
                            <p>{profile.text}</p>
                        </div>
                    ))}
                    {selectedProfile && (
                    <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProfile.text}</h2>
                        <hr/>
                        <div className={styles.modalContentWrap}>
                            <img 
                                src={selectedProfile.imgSrc} 
                                alt={selectedProfile.text} 
                                className={styles.modalImage}
                            />
                            <div className={styles.modalText}>
                                <h2>인물 소개</h2>
                                {selectedProfile.details}
                            </div>
                        </div>
                    </div>
                    </div>
                    )}
            </div>
            <div className={styles.buttonWrap}>
                <Link to="/test">
                    <button>다시하기</button>
                </Link>
                <Link to="/program">
                    <button>프로그램북</button>
                </Link>
            </div>
        </div>
    );
};

export default CharacterInfo;