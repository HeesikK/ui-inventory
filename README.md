<<<<<<< HEAD
<img src="https://capsule-render.vercel.app/api?type=waving&color=dfbcf7&height=200&section=header&text=mobi-2th-begginer-2&fontSize=40&fontColor=FFFFFF" />

# 👥 Member
### Pair-1 - Levi, Rin

# 📑 Figma

### 디자인 토큰 -> theme 로 정리 

<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/1582cbbe-a94f-4b0d-9da2-babf8c8579c6" width="300px"/></br>

### 공용 컴포넌트

<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/12bd8247-af6a-48cb-93d5-937e4708167a" width="600px"/></br>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/86553807-0985-4c55-8697-3e5a8688ff96" width="600px"/>

# 📆 Develop Date 
### Develop: 2023.12.13 ~ 2023.12.20

| Date | Content |
| ------------ | ------------- |
| 12/13 | prettier/eslint 셋팅, css 토큰 생성  |
| 12/14 | 스토리북 설치  |
| 12/15 | 쉬는 날  |
| 12/16 | 쉬는 날  |
| 12/17 | 공용 컴포넌트 제작(button, input), 스토리 생성  |
| 12/18 | 공용 컴포넌트 제작(checkbox, tab, selectbox, pagination), 스토리 생성  |
| 12/19 | tailwind, emotion 컴포넌트 제작, UI 라이브러리 사용  |
| 12/20 | ReadMe 작성, panda css 시도, emotion 리팩토링 |
</br>

# 📌 style 라이브러리 장.단점

### tailwind-css
+ 장점</br>
  + 번들 사이즈가 작다.
  + css 요소 수준의 각 유틸리티 클래스를 제공하여 보다 쉽고 섬세하게 원하는 디자인을 구현할 수 있다.
  + css 사용을 위해서 네이밍을 하지 않아도 되고 커스텀 또한 쉽고 자유롭다.

+ 단점</br>
  + 요소에 스타일을 적용하기 위해 className에 값을 넣어주는 방식으로 코드가 복잡하고 가독성이 안좋다.
  + 처음 사용할때 각 클래스명을 익히느라 자주 문서를 참조해야 된다.(높은 문서 의존도)

### panda-css
+ 장점
  + 런타임에 스타일을 계산하거나 주입할 필요가 없으며, 빌드 타임 css 생성하기에 런타임 오버헤드가 없다.

+ 단점
  + 개발된지 얼마 안 돼서 참조할 문서가 많이 없다.

### styled-components
+ 장점</br>
  + css-in-js 방식으로 java-script 환경을 활용할 수 있다.
  + css의 컴포넌트화로 style-sheet 파일을 유지보수 할 필요가 없다.

+ 단점</br>
  + 별도의 라이브러리를 설치해야 하므로 번들 사이즈가 커진다.

### emotion
+ 장점
  + styled-components와 비슷하여 러닝 커브가 짧을 수 있다.
  + 객체 스타일의 문법을 지원해서 css 문법을 간편하게 제작할 수 있다.
  + emotion을 기반으로 하는 라이브러리가 많아 호환성이 좋다.

+ 단점
  + 바벨 설정을 하거나 추가적인 코드(/** @jsxImportSource @emotion/react */)를 넣어줘야 함.

# 🎥 시연영상


### 디자인 토큰을 위한 컴포넌트 생성
props로 옵션을 전달받아, 다양한 모양의 예제를 만들 수 있는 공용 컴포넌트를 제작하였습니다. 
![스크린샷 2023-12-21 오전 3 05 23](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/ccc43ec3-8da7-46af-8ba8-5d4cca597c33)

### 생성 방법
다음과 같이 컴포넌트에 필요한 props를 받습니다. 

![스크린샷 2023-12-21 오전 3 07 20](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/cb261a20-49ec-4ace-b760-c811ef26bc24)

다음과 같이 컴포넌트의 props를 `propsType`속성을 사용하여 정리해주었습니다.이렇게 정리하니, 복잡한 props를 옵션별로 볼 수 있어서 편리하였습니다. 

![스크린샷 2023-12-21 오전 3 07 15](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/4afd7b0a-bf6f-4e1b-83ac-f6288e3b1a2e)

css 라이브러리별 코드 작성 예시입니다.

### 1. styled-components

가장 익숙해서 쉬웠던 라이브러리 입니다. 

![스크린샷 2023-12-21 오전 3 11 06](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/42e4acd8-501a-40e4-893b-0f4340a46c03)

theme 적용을 위해 theme 파일을 생성하고 이를 `themeProvider`로 감싸주었습니다. 

### 2. tailwind-css

![스크린샷 2023-12-21 오전 3 10 44](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/5fdff770-82d3-486c-992b-454c9c773d09)

![스크린샷 2023-12-21 오전 3 11 06](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/42e4acd8-501a-40e4-893b-0f4340a46c03)

### 3. emotion
emotion의 경우 `emotion/style` 이라는 스타일 컴포넌트를 만드는 기능을 제공하지만, 이를 사용하지 않고 기본 문법을 주는 방식으로 작성하였습니다.
처음에는 emotion의 ` css 인라인 스타일 방식이 익숙하지 않아 다음과 같이 하나씩 옵션을 css로 정의했지만,

![스크린샷 2023-12-21 오전 3 33 21](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/7fe70af3-f4db-485b-826b-59dad230164b)

다음과 같이 사용할 수 있다는 것을 알고 리팩토링하였습니다. 

![스크린샷 2023-12-21 오전 3 30 28](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/1b1e6030-18ae-4d5e-a867-be0cd7786403)

위와 같은 코드를 combineStyle 이라는 하나의 `배열` 형태로 묶어서 정의하고, 이를 css 속성에 넣었습니다.

![스크린샷 2023-12-21 오전 3 34 43](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/daead8f0-cdd1-475d-8bda-e751f039e318)

theme 적용을 위해서 다음과 같이 `tailwind-css`에 다음과 같이 theme을 추가해주었습니다. 

![스크린샷 2023-12-21 오전 3 41 16](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/fb322577-0e72-4040-9bcc-40285d355a0c)

#### 📝 에러 해결
처음에 emotion의 cli를 제대로 했음에도 css가 적용이 안되는 문제가 있었습니다.
다음과 같이 파일 상단에 코드를 추가해주었더니, 해결되었습니다.

![스크린샷 2023-12-21 오전 3 43 08](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/0868220c-d75e-4b89-9682-1ccd12811497)

하지만 매번 파일에 해당 코드를 적어주어야 한다는 문제점이 있어서, 이를 babel 설정을 해서 해결할 수 있는 방법을 다음 프로젝트에는 적용하려고 합니다.

### 3. panda-css

#### 적용 못했음.. ❌ 에러 과정 설명

설치 중에 판다의 css모듈이 깔려있는 `style-system`이 `src` 외부에 깔려서 css 적용시 해당 파일 읽을 수 없다는 에러가 나왔습니다. 

![스크린샷 2023-12-21 오전 3 37 45](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/9f8d3eea-b330-4999-a0f5-a4ed7cceb495)


해결을 위해 `jsconfig.json`에서 include에 `src`외에 `style-systen`을 추가했지만, 해결하지 못했습니다. 

# 스토리북

#### Pagination

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/d3910b6b-db65-4ad8-9349-a70558f2fd88

#### BasicButton

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/7399f020-4698-4dab-b75d-3f2b1c7f6c2a

#### BasicInput

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/d7c22a76-2c65-4db7-b229-0b3906c2ec46

#### CheckBox

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/949c1dda-9691-4955-b9cf-513459767918

#### SelectBox

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/6c6bdf6a-c77a-4dfb-8ea8-235198c74933

#### Tab

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/86fd4042-d9d4-4ba1-88da-66fa1cf73a7d

# UI 라이브러리

### 1. MUI

모든 라이브러리 중에 가장 리액트에 특화되고, 익숙한 느낌이었습니다. 기본 스타일이 예뻐서 많은 사람들이 사용하는 이유를 깨달았습니다.

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/f5b5a9d2-8c4a-48f1-b77b-f4ce561f70ff


### 2. Chakra UI

개인적으로 공식문서에 정리가 잘 되어 있어, 사용하기가 편리했던 라이브러리였습니다. 저희 둘다 처음 사용해봤는데
사용이 쉬워 많이 사용할 것 같습니다.

![스크린샷 2023-12-21 오전 3 47 56](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/cc309a25-53d0-44f4-b7c2-53dc4a5efbb1)

### 3, 5. TailwindCSS UI + Heaedless UI

tailwind UI의 경우 유료 버전이 많이 쓸만한 게 없었고, headless UI 의 경우는 같은 tailwind 기반이지만 사용할 컴포넌트가 매우 많아서 좋았습니다. 
css 코드가 숨겨져 있는 타 라이브러리와 달리, 위 라이브러리들은 className으로 tailwind css 코드가 있어서 수정하기가 좋다는 생각이 들었습니다. 

### 4. Shadcn UI

사용법이 신기하다고 생각했던게, 라이브러리를 설치하는 것이 아닌 원하는 UI를 실행해서 공유 컴포넌트 코드를 가져오는 방식으로 사용하는 거였습니다.
(다음과 같이 ui 폴더에 공유 컴포넌트가 생성되고 이를 import 하고 커스텀에서 사용하는 방식)
<img width="337" alt="스크린샷 2023-12-21 오전 4 04 13" src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/540f8016-d33f-43d6-9ad4-826c48be6b7f">
저희가 처음에 정의했던 props를 통한 공유 컴포넌트와 코드가 매우 비슷해서 적용하기가 어렵지 않았습니다. 
이러한 방식으로 통해 라이브러리의 가벼움, 종속성 줄이기, 커스텀 쉬움 이라는 장점이 생겨서 좋은 것 같습니다. 

<img width="902" alt="스크린샷 2023-12-21 오전 3 59 53" src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/37dfcc3b-8b2d-4d11-8c07-d599247e83d5">

# 💡 회고

### Levi

다양한 라이브러리를 사용할 수 있어서 좋았던거 같습니다. 처음 2주차 주제를 봤을땐 꽃길인줄 알았지만 styled-components를 제외하고는 불꽃길이였던..😥</br>
앞으로도 styled-components를 자주 사용할거 같지만 그래도 프로젝트를 진행할때 상황에 맞게 여러 라이브러리를 사용할 수 있을거 같아서 많은 도움이 되었던거 같습니다. </br>
스토리북도 평소에 들어보긴 했지만 사용해보는건 처음이여서 많이 생소했지만 적용하고나서 보니 왜 사용하는지 알 거 같고 유용해서 앞으로도 자주 사용할 거 같습니다.

### Rin

개인적으로 평소에는 관심이 있었지만 사용하지 못했던 라이브러리부터(tailwind), 모르던 라이브러리까지 모두 사용해보면서, 각각의 장단점을 익힐 수 있었던 유익한 한 주 였던 것 같습니다. (이번주는 쉽다고 생각했는데.. 
css는 파면 팔 수록 시간 도둑인 것 같아요..) 그리고 예전에 한번 봤짐나 내외했던(?) 스토리북을 이제 잘 쓸 수 있어서 행복했습니다. 
<br/>
개인적으로 chakra를 좋은 UI 라이브러리라고 생각했고, Shadcn UI 의 경우는 신선했습니다. 개인적으로 emotion을 능가한다는 panda css를 써보지 못한게 아쉬웠습니다. 다음에도 에러를 해결해서 적용시켜 봐야 겠습니다!
그리고 props를 사용한 공유 컴포넌트를 만드는 과정에서, theme 외의 스타일 코드를 어떻게 하면 재사용성을 줄지 생각해봤는데, 방법을 잘 몰라 쉽지 않았습니다.  컴포넌트마다 다른 width, height는 힘들 것 같고, font-size같은 경우는 재사용이 가능할 것 같다는 생각이 들었습니다. 
<br/>
공부하는 과정에서 storybook의 실제 기업 사용 사례를 보는게 도움이 많이 되었는데, 다른 분들에게도 이를 추천하고 싶습니다! 
=======
# ui-inventory
>>>>>>> 1f326745b2b3de679910e7e770c44c2a490c86be
