# Components

## Text
    1. 텍스트에 굵기, 크기, 색깔 변화가 가능하고 밑줄, 취소선, 마크 표시를 할 수 있다.
    2. block 혹은 inline 설정을 통해 div 태그 내에 넣을지 p 혹은 span 태그 내에 넣을지 선택이 가능하다.
    3. code 설정을 통해 code 형식으로 텍스트를 넣을 수 있다.

## Header
    1. h1 ~ h6 까지 설정이 가능하다.
    2. 굵기, 색깔 변화가 가능하고 밑줄 표시를 할 수 있다.

## Image
    1. 이미지의 가로 세로 길이 및 화면 출력 형식을 설정할 수 있다.
    2. 이미지로 띄울 사진들과 사진이 로딩되기 전의 placeholder 사진이 따로 있다.
    3. 컴포넌트 내부 훅을 이용해 lazy 속성을 통한 사진 늦게 출력하기 기능이 있다. 
    (화면 상에 해당 사진이 얼마나 노출되느냐에 따라 placeholder가 출력되어야할 사진으로 바뀌게 설정할 수 있다.)

## Spacer
    1. 하위 컴포넌트와 요소를 조작하여 자동으로 간격이 생기게 만든다.
    2. 가로 정렬, 세로 정렬 모두 적용이 가능하다.

## Spinner
    1. 로딩중 화면 구성에 사용한다.
    2. 스피너 색과 크기 조절이 가능하다.

## Toggle
    1. 체크 박스와 동일한 기능에 껐다 킬 수 있는 버튼 모양의 컴포넌트이다.
    2. 체크 박스의 형태는 숨겨두었다.
    3. 만약 Toggle 버튼이 비활성화되면 누를 수 없게 설정되어있다.

## Upload
    1. 클릭을 통해 파일 업로드가 가능하다.
    2. 파일이 들어왔을 때 들어온 파일의 이름을 표시한다.
    3. drag and drop으로도 파일 업로드가 가능하다.

## Badge
    1. 알림이 쌓인 수를 보여주는 UI
    2. 일정 개수를 넘어서면 '한계 숫자 +' 의 모습으로만 나타난다.
    3. 뱃지의 배경색과 글자색 지정이 가능하다.
    4. 알림이 0개일 때 뱃지가 보이게할지, 보이지 않게 할지 설정할 수 있다.
    5. 숫자가 없이 알림이 있다만 보여주는 뱃지로도 설정할 수 있다.

## Icon
    1. 아이콘 라이브러리 Feather를 사용 (yarn add feather-icons)
    2. 아이콘의 크기와 색깔, 테두리 굵기를 설정 가능
    3. 아이콘 이름을 통해 다양한 아이콘 사용 가능
    4. rotate 속성을 이용하여 아이콘의 회전도 가능

## Avatar
    1. 사용자의 프로필 사진을 나타낸다.
    2. 프로필 사진의 모양, 내부 사진이 들어갈 모드, 프로필 크기를 지정할 수 있다.
    3. 프로필 그룹을 통해 여러개의 프로필이 모여있는 모습을 만들 수 있다.

## Input
    1. 추후 확장성을 위해 Wrapper로 감싼 형태로 제작하였다.
    2. Input창 활성화 여부, 읽기 전용 모드 활성화 여부를 바꿀 수 있다.
    3. 유효하지 않은 입력값이 들어왔을 때 표시할 수 있다.
    4. 꽉찬 block 형식과 inline-block 형식 모두 지원한다.
    5. 상단의 label로 입력 값으로 무엇을 넣어야 하는지 표시한다.

## Select
    1. option과 placeholder에 대해 추가로 처리한 Input 컴포넌트와 비슷하다.
    2. option 선택 전 placeholder로 보이기 위해 hidden 속성을 이용한 트릭을 사용한다.
        - options로 넣은 맨 앞 요소가 hidden 속성이 true일 때 
        해당 요소는 다른 option을 선택하면 보이지 않지만 처음 화면 렌더링 시에는 보인다.

## Slider
    1. 비디오 재생바나 볼륨 조절과 같은 곳에 사용한다.
    2. 잡을 수 있는 곳을 핸들, 안쪽의 영역을 레일, 채운 영역을 트랙이라고 부른다.
    3. 이벤트를 브라우저 전역으로 잡아서 커서가 핸들을 한번 잡으면 레일을 벗어나도 이벤트가 작동한다. 
    (커서가 핸들을 꽉 잡고 움직이는 경우보다 레일을 벗어나는 경우가 더 많기 때문)
    4. Spacer와 Icon 컴포넌트를 이용한 볼륨 조절 컴포넌트를 따로 제작하였다.

## Progress
    1. Slider를 응용한 로딩바의 형태이다.
    2. 키프레임과 애니메이션을 이용해 움직이는 로딩바를 구현하였다.
    3. 진행상황에 따라 로딩바가 움직인다.

## Divider
    - 요소들을 위아래로 나누거나 좌우로 나누는 컴포넌트
    
## Skeleton
    1. 로딩을 보여줄 때 사용, 스피너와는 다르게 이곳에 다른 컨텐츠가 있음을 직관적으로 보여준다.
    2. 아이콘이나 텍스트 등이 있음을 보여주기 위해 박스형, 원형, 문장형으로 나누어 제작한다.
    3. Base 컴포넌트를 기반으로 제작하며 제작한 컴포넌트들은 index.js에서 넘겨받는다.

## Flux
    1. 레이아웃을 쉽게 만들기 위해 사용
    2. Row, Col로 이루어져 있다.
    3. Context를 이용한 Gutter 속성으로 요소 간의 간격을 조절할 수 있다.
    4. offset과 span 속성을 이용해 요소가 차지하는 영역을 조절할 수 있다.

## Breadcrumb
    1. 현재 사용자가 어떤 경로를 거쳐 어디에 위치해있는지 알려준다.
    2. 경로 중 하나를 누르면 해당 위치에 붙어있는 링크를 통해 그 경로로 이동할 수 있다.
    3. 현재 위치는 더 굵은 글씨로 표시되며 꺽쇠는 더 붙지 않는다.

## Tab
    1. 페이지 이동 없이 컨텐츠를 스위칭하기 위해 사용하는 컴포넌트
    2. Breadcrumb나 Avatar와 같이 타입 검증 이후 컴포넌트가 출력된다. (여기서는 리팩터링하였다.)
    3. 탭 안에 이동할 페이지를 넣으면 어느 페이지든 출력된다.

## Modal
    1. 페이지 내 이벤트를 통해 별도의 페이지 이동 없이 팝업창으로 보여주는 컴포넌트
    2. Modal의 특성상 body의 가장 최상위에 위치해야하는데 이 때 react portal을 이용한다.
        - ReactDom.createPortal: 첫 번째로 DOM을 받고 두 번째로 넣을 element를 받아서 이용한다. element는 해당 DOM의 최상위에서 작동한다.
    3. useClickAway 훅을 이용하여 팝업창 바깥을 누르거나 닫기 버튼을 누르면 나갈 수 있다.

## Toast
    1. 알림을 띄울 때 사용하는 컴포넌트
    2. jsx가 아닌 별도 클래스를 통해 즉시 띄우는 컴포넌트이다.
    3. ReactDOM.render을 이용한다.
        - createPortal은 원하는 위치에 컴포넌트를 넣는 용도, render는 포탈 자체를 출력 
    4. useTimeout을 이용하여 일정 시간이 지나면 알림이 사라진다.
# Hook

## UseToggle
    - Toggle 컴포넌트의 작동을 위한 훅

## UseHover
    - 커서를 갖다대면 true, 커서가 벗어나면 false를 반환하는 훅

## useScroll
    - 특정 엘리먼트의 스크롤 위치를 추적하는 훅

## useRafState
    - useScroll에서 scroll을 움직일 때마다 리렌더링 되는 것을 막는 성능 최적화 훅

## useKey, useKeyPress
    - 키보드 이벤트를 담당하는 훅, 주로 단축키를 담당

## useClickAway
    - 특정영역 외부를 클릭하면 이벤트를 발생시키는 훅

## useResize
    - target element의 크기가 변했을 때 이벤트를 실행하는 훅

## useLocalStorage, useSessionStorage
    - 로컬저장소와 세션저장소를 이용할 때 사용하는 훅

## useForm
    - 입력창 사용을 위한 훅
    - formik이라는 더 좋은 라이브러리가 있긴 하다.

## useTimeOutFn, useTimeout
    - 시간이 지난 후 리디렉션 되는 등의 이벤트를 담당하는 훅
    - useTimeOutFn은 직접 실행 이벤트 지시가 가능, useTimeOut은 이벤트가 자동 실행.

## useIntervalFn, useInterval
    - 웹 사이트에서 반복되는 작업을 담당하는 훅
    - useTimeout과 마찬가지로 Fn은 직접 실행 이벤트 지시가 가능, useInterval은 이벤트가 자동 실행

## useDebounce
    - 특정 기간 내에 같은 이벤트가 호출 됐을 경우 가장 마지막 이벤트만 호출하는 훅
    - setTimeOutFn을 활용한다.

## useAsyncFn, useAsync
    - 비동기 로직을 제거하기 위해 사용하는 훅
    - 네트워크, 타임아웃 등의 로직이 있을 때 사용한다.
    - 함수 호출로 실행하는 useAsyncFn 훅, 컴포넌트가 로드되면 바로 실행되는 useAsync 훅으로 나뉜다.

## useHotKey
    - 복잡한 단축키를 지원하기 위해 만들어진 훅 (ex: ctrl + R 등)

# 사용자 정의 훅 잘 사용하기
## useImperativeHandle(import react)
    - 라이브러리 등에 사용되는 특수한 컴포넌트에 사용되는 훅
    - 상위 컴포넌트에서 하위 컴포넌트를 함수 호출로 제어할 수 있다.

# 컴포넌트 잘 설계하기
아키텍처: 우리가 일을 잘 하기 위한 방법!
- 모듈의 구현과 나누는 방법을 정한다.
- 모듈에서 중요한 것은 응집도와 결합도!
