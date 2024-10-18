import React from 'react';
import Index from './index';
import styles from './Program.module.css';

const Program = () => {
    return (
        <>       
        <Index/>
        <div className={styles.container}>
            <div className={styles.whiteSection}>
                <div className={styles.sectionName}>
                    <p className={styles.mainTitle}>연극 기억의 이름</p>
                    <p className={styles.semiTitle}>기획 의도 / 시놉시스</p>
                </div>
                <div className={styles.sectionTextWrap}>
                    <div className={styles.sectionText}>
                            01 /
                    </div>
                    <div className={styles.sectionText}>
                        <h2>기획 의도</h2>
                        <p>
                            의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
                            대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.
                            정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
                            법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.
                            전직대통령의 신분과 예우에 관하여는 법률로 정한다.
                            모든 국민은 통신의 비밀을 침해받지 아니한다.
                            국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
                            대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다.
                        </p>
                    </div>
                </div>
                <div className={styles.sectionTextWrap}>
                    <div className={styles.sectionText}>
                            02 /
                    </div>
                    <div className={styles.sectionText}>
                        <h2>시놉시스</h2>
                        <p>
                            의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
                            대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.
                            정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
                            법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.
                            전직대통령의 신분과 예우에 관하여는 법률로 정한다.
                            모든 국민은 통신의 비밀을 침해받지 아니한다.
                            국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
                            대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.defSection}>
                <div className={styles.sectionName}>
                    <p className={styles.mainTitle}>제작 비하인드</p>
                    <p className={styles.semiTitle}>못다 한 이야기들 / 캐릭터 비하인드 / 시대배경</p>
                </div>
                <div className={styles.sectionTextWrap}>
                    <div className={styles.sectionText}>
                            01 /
                    </div>
                    <div className={styles.sectionText}>
                        <h2>기획 의도</h2>
                        <p>
                            의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
                            대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.
                            정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
                            법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.
                            전직대통령의 신분과 예우에 관하여는 법률로 정한다.
                            모든 국민은 통신의 비밀을 침해받지 아니한다.
                            국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
                            대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </>

    );
};

export default Program;