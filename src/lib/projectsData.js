const img = (id, name) => `/works/detail/${id}/${id}-${name}.jpg`;
const map = (id) => `/works/detail/${id}/map.jpg?v=6`;

const projects = [
    {
        id: '1',
        title: '강현어울림복합센터',
        images: ['/works/01/01.jpg', '/works/01/02.jpg', '/works/01/03.jpg', '/works/01/04.jpg'],
        thumbnail: '/works/thumbs/01.jpg',
        hoverImage: '/works/hover/01.png',
        sections: [
            [{ type: 'image', src: img('01', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '강현어울림복합센터 건립공사',
                    title: '대지위치: 강원특별자치도 양양군 강현면 정암리 560번지',
                    body: '강현면은 물치천을 중심으로 남과 북으로, 해변쪽의 상업지역과 배후의 기존 마을들로 구분되어 있었다. 기존의 주민 서비스 공간은 주로 해변의 상업지역에 위치해 있었으며 정작 정주민들이 서비스를 이용하기 어려운 문제점이 있었다. 이에 정주민들이 새로 생길 서비스 거점에 어떤 관계를 맺을 것인지가 주요 관점으로, 분할하고 넓게 퍼지면서 친화적으로 읽히도록 계획했다.',
                },
                { type: 'image', src: img('01', 'p0-02'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/folder/01/axon.jpg',
                    span: 3,
                    tags: ['지붕층', '지상2층', '지상1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '도시와 연결되는 복합 커뮤니티 공간',
                    body: '주변의 소규모 군집형 도시조직과 보행축을 고려해 건축물과 외부공간을 배치하고, 일상적인 기능과 커뮤니티 프로그램을 층으로 구성했다. 각 프로그램은 공용공간과 외부공간을 통해 유기적으로 연결되어 내부의 활동이 자연스럽게 주변으로 확장되며 지역의 중심적인 커뮤니티 거점을 형성한다.',
                },
            ],
            [
                { type: 'image', src: '/works/detail/01/plan1.jpg?v=2', span: 2 },
                { type: 'image', src: '/works/detail/01/plan2.jpg?v=2', span: 2 },
            ],
            [
                { type: 'image', src: '/works/detail/01/section.jpg?v=2', span: 3 },
                {
                    type: 'text',
                    span: 1,
                    align: 'center',
                    body: '다양하고 풍부한 외부공간은 마을사람들에게는 쉼터를, 학생들에게는 모임의 장소를, 방문객에게는 쾌적함을 주며 하나의 독립적 건축물이 아닌 주변과 소통하며 같이 이루어지는 풍경으로서 연계하는 것을 목표로 계획했다.',
                },
            ],
            [{ type: 'image', src: img('01', 'p0-06'), span: 4 }],
            [{ type: 'image', src: img('01', 'p0-07'), span: 4 }],
            [{ type: 'image', src: img('01', 'p0-08'), span: 4 }],
            [{ type: 'image', src: img('01', 'p1-01'), span: 4 }],
            [{ type: 'image', src: '/works/folder/01/대강당.jpg', span: 4 }],
            [{ type: 'image', src: '/works/folder/01/aerial.png', span: 4 }],
        ],
    },
    {
        id: '2',
        title: '고성군여성회관',
        images: ['/works/02/01.jpg'],
        thumbnail: '/works/thumbs/02.jpg',
        hoverImage: '/works/hover/02.png',
        sections: [
            [{ type: 'image', src: img('02', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '고성군 여성회관 그린리모델링 사업 건축설계 제안공모',
                    title: '대지위치: 강원특별자치도 고성군 간성읍 간성로 97',
                    body: '기존 건축물의 외피·창호 성능을 개선하고 고효율 냉난방 및 열회수 환기시스템을 적용해 냉난방 에너지 손실을 저감한다. 옥상 PV 및 남서측 BIPV를 도입하고 기존 설비와 연계해 신재생에너지 생산량을 확보하며 공간조닝과 동선을 재구성해 공공공간의 활용성을 높인다.',
                },
                { type: 'image', src: map('02'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/detail/02/diagram.jpg',
                    span: 3,
                    tags: ['지붕층', '지상3층', '지상2층', '지상1층', '지하1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '공간의 연속성과 개방성',
                    body: '반복되는 프레임과 곡선형 공간 요소를 활용해 공간의 연속성과 방향성을 형성하고, 층별로 다양한 휴식과 체류가 가능한 특성화 공간을 구성했다. 자연채광과 외부 조망을 적극적으로 유입하고, 개방적인 공용공간을 중심으로 이용자 간의 자연스러운 교류와 커뮤니티 활동이 이루어질 수 있도록 계획했다.',
                },
            ],
            [{ type: 'image', src: img('02', 'p0-04'), span: 4 }],
            [
                { type: 'image', src: img('02', 'p0-05'), span: 2 },
                { type: 'image', src: img('02', 'p0-06'), span: 2 },
            ],
            [
                { type: 'image', src: img('02', 'p0-07'), span: 2 },
                { type: 'image', src: img('02', 'p0-08'), span: 2 },
            ],
            [{ type: 'image', src: img('02', 'p1-01'), span: 4 }],
            [{ type: 'image', src: img('02', 'p1-02'), span: 4 }],
        ],
    },
    {
        id: '3',
        title: '구립예지어린이집',
        images: ['/works/03/01.jpg'],
        thumbnail: '/works/thumbs/03.jpg',
        hoverImage: '/works/hover/03.png',
        sections: [
            [{ type: 'image', src: img('03', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '구립예지어린이집 건립 설계공모',
                    title: '대지위치: 서울특별시 관악구 신림동 646-447',
                    body: '밀집된 주거지역에서 막다른 도로를 맞이한 쐐기 같은 장소에 북측으로 점점 폭이 줄어드는 형상을 가진 대지에서 주변의 제한된 컨텍스트를 어떻게 해석하고 관계를 맺을 것인지가 주요한 점이었다. 아이들의 스케일에서 바라보고 공간의 크기 및 단면적 흐름의 전개에 따라 공간이 입체적으로 정체성을 갖도록 시도했다.',
                },
                { type: 'image', src: img('03', 'p0-02'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/detail/03/diagram.jpg',
                    span: 3,
                    tags: ['지붕층', '지상3층', '지상2층', '지상1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '일상 속에서 확장되는 놀이공간',
                    body: '아이들의 자유로운 사고와 놀이가 공간으로 확장될 수 있도록 다양한 활동과 휴식의 장면을 구성했다. 서로 다른 공간이 자연스럽게 연결되며 만남과 관계 형성을 유도하고, 놀이와 일상이 공존하는 유연한 환경을 통해 생각과 경험이 함께 성장하도록 계획했다.',
                },
            ],
            [
                { type: 'image', src: '/works/folder/03/plan-1f.jpg', span: 2 },
                { type: 'image', src: '/works/folder/03/plan-2f.jpg', span: 2 },
            ],
            [
                { type: 'image', src: '/works/folder/03/plan-3f.jpg', span: 2 },
                { type: 'image', src: '/works/folder/03/plan-roof.jpg', span: 2 },
            ],
            [
                { type: 'image', src: '/works/detail/03/sun.jpg?v=2', span: 2 },
                { type: 'image', src: '/works/detail/03/view.jpg?v=2', span: 2 },
            ],
            [
                { type: 'image', src: img('03', 'p1-01'), span: 2 },
                { type: 'image', src: img('03', 'p1-02'), span: 2 },
            ],
            [{ type: 'image', src: img('03', 'p1-03'), span: 4 }],
            [{ type: 'image', src: img('03', 'p1-04'), span: 4 }],
        ],
    },
    {
        id: '4',
        title: '금천외국어센터',
        images: ['/works/04/01.png', '/works/04/02.png'],
        thumbnail: '/works/thumbs/04.jpg',
        hoverImage: '/works/hover/04.png',
        sections: [
            [{ type: 'image', src: img('04', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '금천 국제외국어센터 건립공사',
                    title: '대지위치: 서울특별시 금천구 범안로 1242',
                    body: '장방형의 대지에 주어진 스페이스 프로그램을 반영하기 위해선 새로운 매스의 유형을 찾기보다 외국어센터의 공간적 특성에 다양한 물리적 상황과 요구되는 조건을 수용하고 대화와 학습의 공간으로써 동선에 따라 공간의 성격이 변화하며 외부공간을 통해 주변과 어떠한 관계를 가질 것인지에 대해 해결하고자 했다.',
                },
                { type: 'image', src: map('04'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/folder/04/axon.jpg',
                    span: 3,
                    tags: ['지붕층', '지상5층', '지상4층', '지상3층', '지상2층', '지상1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '동선을 따라 변화하는 공간',
                    body: '층별 프로그램에 따라 공간의 성격을 달리하고, 계단과 공용공간을 중심으로 각 층을 연결했다. 이용자는 이동하는 과정에서 다양한 학습과 교류의 공간을 마주하며, 건물 전체를 하나의 연속된 공간으로 경험하게 된다.',
                },
            ],
            [
                { type: 'image', src: `${img('04', 'p0-04')}?v=2`, span: 2 },
                { type: 'image', src: `${img('04', 'p0-06')}?v=2`, span: 2 },
                { type: 'image', src: `${img('04', 'p0-08')}?v=2`, span: 2 },
                { type: 'image', src: `${img('04', 'p0-10')}?v=2`, span: 2 },
            ],
            [
                { type: 'image', src: `${img('04', 'p0-11')}?v=2`, span: 3 },
                { type: 'text', span: 1, align: 'end', title: '횡단면도' },
            ],
            [
                {
                    type: 'text',
                    span: 2,
                    title: '포켓 커뮤니티',
                    body: '- 지상 2층과 3층을 연계하는 수직공간 생성\n- 남향 채광이 좋아 커뮤니티가 활발히 일어나는 장소로 활용',
                    src: '/works/detail/04/pocket.jpg',
                },
                {
                    type: 'text',
                    span: 2,
                    title: '이용자들을 위한 쉼터 공간 계획',
                    body: '- 수강생들이 머물며 외국어로 이야기를 주고 받는 소통과 조우의 공간\n- 자유로운 가구배치에 의해 휴식이 가능한 커뮤니티 공간 계획',
                    src: img('04', 'p1-01'),
                },
            ],
            [{ type: 'image', src: img('04', 'p1-02'), span: 4 }],
            [{ type: 'image', src: img('04', 'p1-03'), span: 4 }],
            [{ type: 'image', src: img('04', 'p1-04'), span: 4 }],
        ],
    },
    {
        id: '5',
        title: '봉산명행정복지센터',
        images: ['/works/hover/05.png'],
        thumbnail: '/works/thumbs/05.jpg',
        hoverImage: '/works/hover/05.png',
        sections: [
            [{ type: 'image', src: img('05', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '봉산면 행정복지센터 건립 설계공모',
                    title: '대지위치: 경상북도 김천시 봉산면 예지리 210-3 외 3필지',
                    body: '봉산면은 김천시에서 서쪽으로 차량 10분 정도 떨어져 있는 2,821명이 거주하는 작은 마을이다. 마을 8개(리) 각각의 오래된 역사와 커뮤니티가 지속되는 ‘봉산문화마을’. 본 대지는 주민들이 함께 모여 일상을 공유하고, 건강을 돌보며, 새로운 이야기를 만들어 가는 열린 공동체 장소의 역할을 한다.',
                },
                { type: 'image', src: map('05'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: img('05', 'p0-03'),
                    span: 3,
                    tags: ['지붕층', '지상2층', '지상1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '문화프로그램의 복합화',
                    body: '마을 내 부족한 문화생활 시설을 보완하기 위해 카페, 작은도서관 등 다양한 프로그램을 하나의 공간에 복합화했다. 주요 프로그램을 1층에 배치해 주민 접근성을 높이고, 회랑을 중심으로 공간을 연결해 프로그램 간 자연스러운 연계와 다양한 활동을 유도했다.',
                },
            ],
            [
                { type: 'image', src: '/works/folder/05/plan-1f.jpg', span: 2 },
                { type: 'image', src: '/works/folder/05/plan-2f.jpg', span: 2 },
            ],
            [{ type: 'image', src: img('05', 'p0-06'), span: 4 }],
            [{ type: 'image', src: img('05', 'p0-07'), span: 4 }],
            [{ type: 'image', src: img('05', 'p1-01'), span: 4 }],
            [{ type: 'image', src: img('05', 'p1-02'), span: 4 }],
            [{ type: 'image', src: img('05', 'p1-03'), span: 4 }],
            [{ type: 'image', src: img('05', 'p1-04'), span: 4 }],
        ],
    },
    {
        id: '6',
        title: '상일2동주민센터',
        images: ['/works/06/01.jpg', '/works/06/02.jpg'],
        thumbnail: '/works/thumbs/06.jpg',
        hoverImage: '/works/hover/06.png',
        sections: [
            [{ type: 'image', src: '/works/folder/06/hero.jpg', span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '상일2동 주민센터 공공청사 건립 설계용역',
                    title: '대지위치: 서울특별시 강동구 상일동 산 77-27 일원',
                    body: '상일 2동은 강일IC와 상일나들목을 기준으로 동서로 나뉘어져 있으며, 대지는 지구단위계획을 통해 서울고덕강일 3지구로 새롭게 개발되어 하남 미사강변의 서측에 접하고 있다. 지리적 요건과 새롭게 시작되는 지역의 주민들이 상호 교류와 소통을 가질 수 있는 공간을 계획했다.',
                },
                { type: 'image', src: map('06'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: img('06', 'p0-03'),
                    span: 3,
                    tags: ['지붕층', '지상4층', '지상3층', '지상2층', '지상1층'],
                },
                {
                    type: 'text',
                    span: 1,
                    title: '지역을 잇는 커뮤니티 복합공간',
                    body: '행정, 문화, 교육, 주민자치 등의 다양한 프로그램을 한 건물에 담아 기능 간 연계와 공간의 효율성을 확보했다. 저층부의 민원공간부터 상부 문화시설까지 이용 특성에 따라 배치하며 층별 공용공간을 통해 자연스러운 교류와 소통이 이어진다.',
                },
            ],
            [
                { type: 'image', src: img('06', 'p0-04'), span: 2 },
                { type: 'image', src: img('06', 'p0-05'), span: 2 },
            ],
            [
                { type: 'image', src: img('06', 'p0-06'), span: 2 },
                { type: 'image', src: img('06', 'p0-07'), span: 2 },
            ],
            [
                { type: 'image', src: img('06', 'p0-08'), span: 4 },
                {
                    type: 'text',
                    span: 4,
                    title: '공간의 크기 및 단면적 흐름의 전개',
                    body: '- 동선의 흐름에 따라 공간의 스케일 변화를 인지할 수 있도록 단면적 개념 적용\n- 커뮤니티공간과 외부공간을 입체적으로 연계하여 다양한 공간을 경험할 수 있도록 구성',
                },
            ],
            [{ type: 'image', src: '/works/06/01.jpg', span: 4 }],
            [
                { type: 'image', src: '/works/06/02.jpg', span: 2 },
                { type: 'image', src: '/works/folder/06/interior-02.jpg', span: 2 },
            ],
            [{ type: 'image', src: img('06', 'p1-04'), span: 4 }],
        ],
    },
    {
        id: '7',
        title: '시흥소방서',
        images: ['/works/07/01.jpg'],
        thumbnail: '/works/thumbs/07.jpg',
        hoverImage: '/works/hover/07.png',
        sections: [
            [{ type: 'image', src: img('07', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '시흥소방서 장곡 119안전센터 신축 설계공모',
                    title: '대지위치: 시흥시 장곡동 953',
                    body: '119안전센터는 24시간 가동되는 도시의 핵심 안전 거점으로서, 화재, 구조, 예방, 민원 대응 등 다층적인 기능을 수행하는 복합 공공시설이다. 본 계획은 신속한 출동 체계, 효율적인 훈련 환경, 대원 복지 향상, 지역사회와의 연계를 동시에 충족하는 통합형 공간 시스템 구축을 목표로 한다.',
                },
                { type: 'image', src: map('07'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/detail/07/diagram.jpg',
                    span: 3,
                    tags: ['지붕층', '지상3층', '지상2층', '지상1층'],
                },
            ],
            [{ type: 'image', src: img('07', 'p0-05'), span: 4 }],
            [{ type: 'image', src: img('07', 'p0-06'), span: 4 }],
            [{ type: 'image', src: img('07', 'p0-07'), span: 4 }],
            [{ type: 'image', src: img('07', 'p0-08'), span: 4 }],
            [
                { type: 'image', src: img('07', 'p1-01'), span: 2 },
                { type: 'image', src: img('07', 'p1-02'), span: 2 },
            ],
            [
                { type: 'image', src: img('07', 'p1-03'), span: 2 },
                { type: 'image', src: img('07', 'p1-04'), span: 2 },
            ],
            [{ type: 'image', src: img('07', 'p1-05'), span: 3 }],
            [{ type: 'image', src: img('07', 'p1-06'), span: 3 }],
        ],
    },
    {
        id: '8',
        title: '안암어울림센터',
        images: ['/works/08/01.png'],
        thumbnail: '/works/thumbs/08.jpg',
        hoverImage: '/works/hover/08.png',
        sections: [
            [{ type: 'image', src: img('08', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '안암 어울림센터 설계공모',
                    title: '대지위치: 서울특별시 성북구 안암동 5가 103-18',
                    body: '세 갈래길 가장자리에 놓여진 협소한 대지에서 새롭게 계획되는 어울림센터는 지역의 중심공간이다. 모두가 함께 어울리며 지역 주민으로서 서로 교류하고 소통할 수 있는 장소를 마련하고 외부에서 쉽게 인지될 수 있는 정체성 있는 건축물을 계획해야 한다. 작은 공원으로 계획된 보이드 공간은 작은 쉼터의 역할을 할 수 있다.',
                },
                { type: 'image', src: map('08'), span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/folder/08/axon.jpg',
                    span: 3,
                    tags: ['지붕층', '지상4층', '지상3층', '지상2층', '지상1층'],
                },
            ],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: 'URBAN CorneRound 〈어반 코너라운드〉',
                    body: '– 안암동 도시재생 활성화 및 지역 커뮤니티의 새로운 공공 거점시설\n\n협소한 대지에 필요한 프로그램을 수직적으로 분산하고, 각 층의 외부공간을 연계하여 입체적인 커뮤니티 공간을 구성했다. 저층부의 열린 공원을 중심으로 상부의 프로그램을 연결하며 건축물 전체가 하나의 연속된 공공공간으로 작동하도록 계획했다.',
                },
                { type: 'image', src: '/works/detail/08/corner.jpg', span: 2, start: 3 },
            ],
            [
                { type: 'image', src: '/works/detail/08/plan1.jpg', span: 2 },
                { type: 'image', src: '/works/detail/08/plan2.jpg', span: 2 },
                { type: 'image', src: '/works/detail/08/plan3.jpg', span: 2 },
                { type: 'image', src: '/works/detail/08/plan4.jpg', span: 2 },
            ],
            [
                { type: 'image', src: '/works/detail/08/c1.jpg', span: 1 },
                { type: 'image', src: '/works/detail/08/c2.jpg', span: 1 },
                { type: 'image', src: '/works/detail/08/c3.jpg', span: 1 },
                { type: 'image', src: '/works/detail/08/c4.jpg', span: 1 },
            ],
            [{ type: 'image', src: img('08', 'p1-01'), span: 4 }],
            [{ type: 'image', src: img('08', 'p1-02'), span: 4 }],
            [{ type: 'image', src: img('08', 'p1-03'), span: 4 }],
            [{ type: 'image', src: img('08', 'p1-04'), span: 4 }],
        ],
    },
    {
        id: '9',
        title: '윤동주정병욱문학관',
        images: ['/works/09/01.png'],
        thumbnail: '/works/09/01.png',
        hoverImage: null,
        sections: [
            [{ type: 'image', src: '/works/detail/09/main.jpg', span: 4 }],
            [{ type: 'image', src: '/works/detail/09/aerial.jpg', span: 4 }],
            [{ type: 'image', src: '/works/detail/09/front-main.jpg', span: 4 }],
            [{ type: 'image', src: '/works/detail/09/iso.jpg', span: 4 }],
            [
                { type: 'image', src: '/works/detail/09/plan-b1.jpg', span: 2 },
                { type: 'image', src: '/works/detail/09/plan-1f.jpg', span: 2 },
            ],
            [{ type: 'image', src: '/works/detail/09/section.jpg', span: 4 }],
            [
                { type: 'image', src: '/works/detail/09/front.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/front-persp.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/house.jpg', span: 4 },
            ],
            [
                { type: 'image', src: '/works/detail/09/rear-path.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/rear.jpg', span: 4 },
            ],
            [
                { type: 'image', src: '/works/detail/09/plaza.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/plaza-island.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/gap.jpg', span: 4 },
            ],
            [
                { type: 'image', src: '/works/detail/09/cafe.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/interior.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/corridor.jpg', span: 4 },
                { type: 'image', src: '/works/detail/09/lookout.jpg', span: 4 },
            ],
        ],
    },
    {
        id: '10',
        title: '충남예산스마트빌리지',
        images: ['/works/10/01.jpg'],
        thumbnail: '/works/thumbs/10.jpg',
        hoverImage: '/works/hover/10.png',
        sections: [
            [{ type: 'image', src: img('10', 'p0-01'), span: 4 }],
            [
                {
                    type: 'text',
                    span: 1,
                    kicker: '청년스마트빌리지 조성사업 설계공모',
                    title: '대지위치: 충청남도 예산군 예산읍 주교리 267-1번지',
                    body: '충남 예산군의 지역적 가치를 높이고 다양한 세대를 유입해 안정적으로 정착하고 살아가는 기반을 마련한다. 사회 초년생 또는 청년층 예산군민의 니즈를 반영하고 전문성을 함양하는 동시에 쾌적한 보금자리를 제공하며, 청년복합문화플랫폼과 연계해 예산읍 주교리의 지역 활성화와 함께 성장하는 허브공간을 조성했다.',
                },
                { type: 'image', src: '/works/detail/10/map.jpg?v=7', span: 3 },
            ],
            [
                {
                    type: 'image',
                    src: '/works/detail/10/diagram.jpg',
                    span: 3,
                    tags: ['지붕층', '지상3층', '지상2층', '지상1층'],
                },
            ],
            [
                { type: 'image', src: img('10', 'p0-03'), span: 2 },
                { type: 'image', src: '/works/folder/10/plan-2f.jpg', span: 2 },
            ],
            [
                { type: 'image', src: '/works/folder/10/plan-3f.jpg', span: 2 },
                { type: 'image', src: '/works/folder/10/plan-4f.jpg', span: 2 },
            ],
            [{ type: 'image', src: img('10', 'p0-07'), span: 3 }],
            [{ type: 'image', src: img('10', 'p0-08'), span: 3, start: 2 }],
            [{ type: 'image', src: img('10', 'p1-01'), span: 3 }],
            [{ type: 'image', src: img('10', 'p1-02'), span: 3 }],
            [{ type: 'image', src: img('10', 'p1-03'), span: 3 }],
            [{ type: 'image', src: img('10', 'p1-04'), span: 4 }],
        ],
    },
];

export const PROJECTS = projects.map((project) => ({
    ...project,
    thumbnail: project.thumbnail || project.images[0],
}));

export const getProjectById = (id) => PROJECTS.find((project) => project.id === String(id));
