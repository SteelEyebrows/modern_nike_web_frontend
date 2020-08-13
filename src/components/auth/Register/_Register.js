import * as React from "react";
import { withRouter } from "react-router-dom";
import {RegisterContainer} from './_style';
import {FormInput} from '../../common';

const policy=`
제1조 (목적)

본 '나이키닷컴 서비스 이용 약관' (이하 "본 약관"이라 합니다)은 이용자가 (유)나이키코리아에서 제공하는 나이키닷컴 사이트 및 사이트 관련 각종 서비스 (이하 "서비스"라 합니다)를 이용함에 있어 "나이키닷컴"과 “이용자”의 권리 의무 및 책임 사항을 규정함을 목적으로 합니다.

제2조 (정의)

본 약관의 주요 용어는 아래와 같이 정의합니다.

① "NIKE"는 (유)나이키코리아를 말하며 나이키닷컴은 NIKE가 운영하는 공식 온라인 쇼핑몰을 말합니다.

② "서비스"란 나이키닷컴 사이트 및 사이트 관련 각종 서비스를 말합니다.

③ “이용자”란 "사이트"에 접속하여 이 약관에 따라 "나이키닷컴"이 제공하는 “서비스”를 받는 “회원”과 비회원을 말합니다.

④ "회원"은 "나이키닷컴"에 개인 정보를 제공하여 회원 등록을 한 자로서, 회원 전용 "서비스"를 이용할 수 있는 자를 말합니다.

⑤ "비회원"이라 함은 회원에 가입하지 않고 "서비스"를 이용하는 자를 말합니다.

2. 이 약관에서 정하지 아니한 내용과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원 회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다


제 3조 (약관의 게시와 변경)
1. "나이키닷컴"은 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함)전화번호, 모사전송번호, 이메일 주소, 사업자등록번호, 통신판매업신고번호, 개인정보보호책임자 등을 이용자가 쉽게 알 수 있도록 “나이키닷컴”의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화 면을 통하여 볼 수 있도록 할 수 있습니다.

2. "나이키닷컴"은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을 이용 자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.

3. "나이키닷컴"은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.

4. "나이키닷컴"은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 홈페이지의 초기화면에 그 적용일 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "나이키닷컴"은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.

5. 변경된 약관 조항 중 상품의 구매계약에 관한 조항은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 변경전의 조항이 그대로 적용됩니다. 다만, 이미 매매계약을 체결한 이용자가 변경된 조항의 적용을 받기를 원하는 뜻을 상기 제4항에 의한 변경약관의 공지기간 내에 "나이키닷컴"에 송신하여 "나이키닷컴"의 동의를 받은 경우에는 변경된 조항이 적용됩니다.

6. "나이키닷컴"이 개정약관을 공지 또는 통지하면서 회원에게 30일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 따로 공지 또는 고지하였음에도 회원이 명시적으로 거부의사를 표시하지 아니한 경우 회원이 개정약관에 동의한 것으로 봅니다. 또한, 회원이 개정약관의 적용에 동의하지 않는 경우 "나이키닷컴"은 개정약관의 내용을 적용할 수 없으며, 이 경우, 회원은 이용계약을 해지할 수 있습니다. 다만, 기존약관을 적용할 수 없는 특별한 사정이 있는 경우에는 "나이키닷컴"은 이용계약을 해지할 수 있습니다.

7. 이 약관에서 정하지 아니한 내용과 이 약관의 해석에 관하여 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하 는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.

제 4조 (서비스의 제공 및 변경)

1. “NIKE”는 "이용자"에게 아래와 같은 서비스를 제공합니다.

① 상품의 판매

② 다양한 정보의 제공

③ 광고, 이벤트 행사 등 상품과 관련한 다양한 판촉 행위(뉴스레터, DM 포함)

④ 기타 이용자에게 유용한 부가 서비스

2. "나이키닷컴"은 상품이 품절 등으로 더 이상 제공할 수 없는 경우에는 장차 체결되는 계약에 의해 제공할 상품의 내용을 변경할 수 있습니다. 이 경우에는 변경된 상품의 내용 및 제공일자를 명시하여 현재의 상품의 내용을 게시한 곳에 즉시 공지합니다.

3. "나이키닷컴"이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 상품품절 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능 한 주소로 즉시 통지합니다.

4. 전항의 경우 "나이키닷컴"은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, "나이키닷컴"이 고의 또는 과실이 없음을 입증 한 경우에는 아무런 책임을 부담하지 않습니다.

제5조 (서비스의 중단)

1. "나이키닷컴"은 컴퓨터 등 전기통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 "서비스"의 제공을 일시적으로 중단할 수 있습니다.

2. 제1항에 의한 "서비스" 중단의 경우에는 "나이키닷컴"은 제8조에 정한 방법으로 이용자에게 통지합니다.

3. "나이키닷컴"은 제1항의 사유로 "서비스"의 제공이 일시적으로 중단됨으로 인하여 이용자가 입은 손해에 대하여 배상합니다. 단 "나이키닷컴"에 고의 또는 과실이 없는 경우에는 책임을 부담하지 않습니다.

제6조 (회원 가입)

1. "이용자"는 "나이키닷컴"이 정한 가입 양식에 따라 회원 정보를 기입한 후, 이 약관에 동의한다는 의사 표시를 함으로써 회원 가입을 신청합니다.

2. "나이키닷컴"은 전항과 같이 회원으로 가입할 것을 신청한 자가 다음 각 호에 해당하지 않는 한 신청한 자를 "회원"으로 등록합니다.

① 등록 내용에 허위, 기재누락, 오기가 있는 경우

② 기타 회원으로 등록하는 것이 "나이키닷컴"의 기술상 현저히 지장이 있다고 판단되는 경우

3. 아동(만14세 미만인 자)은 회원가입이 불가능 합니다.

4. 회원 가입 계약의 성립시기는 "나이키닷컴"의 승낙이 가입 신청자에게 도달한 시점으로 합니다.

5. "회원"은 제17조 제1항에 의하여 "나이키닷컴"에 등록한 회원정보에 변경이 있는 경우, 상당한 기간 내에 "나이키닷컴" 에서 정하는 방법에 따라 해당변경사항을 "나이키닷컴"에게 통지하거나 수정하여야 합니다.

제7조 (회원의 탈퇴 및 회원자격 상실)

1. "회원"은 "나이키닷컴"에 언제든지 자신의 회원 등록을 말소해 줄 것(회원 탈퇴)을 요청할 수 있으며 "나이키닷컴"은 위 요청을 받은 즉시 해당 "이용자"의 회원 등록 말소를 위한 절차를 밟습니다. 단, 절차가 진행되는 동안에는 기존 일정에 맞춰 예정된 "서비스"를 제공받을 수 있습니다.

2. "나이키닷컴"은 회원자격의 정지 등의 방법을 통해 회원자격을 제한할 수 있으며 자격 상실의 경우에는 회원등록을 말소합니다. 말소의 경우 회원에게 이를 통지하고, 회원등록 말소 전에 30 일 이상의 기간을 정하여 소명할 기회를 부여합니다. 아래와 같은 각각의 경우 회원자격의 말소 대상이 되며, 이에 해당하지 않더라도 "나이키닷컴"의 경영상 판단에 의해 사업의 운영이나 다른 회원의 구매행위에 장애를 발생시키는 회원에 대해서는 동일하게 30일 이상의 기간을 정하여 소명 기회를 부여한 다음 말소가 가능합니다.

① 가입 신청 시에 허위 내용을 등록한 경우

② "서비스"를 이용하여 구입한 재화 등의 대금, 기타 "서비스" 이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우

③ 다른 사람의 "서비스" 이용을 방해하거나 그 정보를 도용하는 등 전자 거래 질서를 위협하는 경우

④ "서비스"를 이용하여 법령과 본 약관이 금지하거나 공서 양속에 반하는 행위를 하는 경우

⑤ 회원자격의 제한 또는 정지의 제재를 3회 이상 받은 회원

⑥ 회원 자격의 제한 또는 정지를 받고 그 제한이 해제된 다음 30일 이내에 다시 제한을 받은 경우

⑦ 거래 제한과 별개로 해당 행위에 대해 시정을 요구하였으나 14 일 이내에 그 사유가 시정되지 아니하는 경우

⑧ 회원의 소재불명 등으로 인해 소명 기회의 제공이 어려운 경우는 "나이키닷컴"은 합리적인 판단으로 회원등록을 말소 가능

⑨ 상품 재판매 등의 목적으로 가장 구매(인기상품 재고를 선점해 놓고 재판매 후 구매 확정하는 경우 등) 하거나 구매 후 반복적으로 반품하는 경우 등 “나이키닷컴”의 영업에 지장을 초래하는 경우

3. "나이키닷컴"은 전자상거래 등에서의 소비자보호에 관한 법률 시행령 제6조에 의거 회원등록이 말소된 회원이라 하더라도 계약 또는 청약 철회 에 관한 기록은 5년, 대금 결제 및 재화 등의 공급에 관한 기록은 5년, 그리고 소비자의 불만 또는 분쟁처리에 관한 기록은 3년간 보존하게 됩니다. 그러나 이러한 기록의 보존이 회원 자격의 유지 및 혜택 제공이 지속되는 것을 의미하지는 않으며, 과거 구매실적에 따라 부여 받은 적립성 마일리지(MiLE) 등 회원으로서의 혜택은 회원자격의 말소와 동시에 소멸하게 됩니다.

제8조 ("이용자"에 대한 통지)

1. "나이키닷컴"이 특정 이용자 또는 "회원"에 대한 통지를 하는 경우 회원이 "나이키닷컴"에 미리 약정하여 지정한 전자 우편 주소 또는 문자 메시지로 할 수 있습니다.

2. "나이키닷컴"은 불특정 다수 회원에 대한 통지의 경우 1주일 이상 "서비스" 사이트 내에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별 통지를 합니다.

제9조 (구매신청)

이용자는 "나이키닷컴"에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, "나이키닷컴"은 이용자가 구매신청을 함에 있어 서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.

1. 재화 등의 검색 및 선택

2. 받는 사람의 성명, 주소, 전화번호, 이메일 주소(또는 이동전화번호) 등의 입력

3. 약관내용, 청약철회권이 제한되는 서비스, 배송료 등의 비용부담과 관련한 내용에 대한 확인

4. 이 약관에 동의하고 위3호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)

5. 재화 등의 구매신청 및 이에 관한 확인 또는 "나이키닷컴"의 확인에 대한 동의

6. 결제방법의 선택

제10조 (구매계약의 성립)

1. "나이키닷컴"은 제9조 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다.

다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.

① 신청 내용에 허위, 기재누락, 오기가 있는 경우

② 상행위(재판매)를 목적으로 구매하는 거래이거나, 거래 정황상 상행위(재판매)를 목적으로 한 구매로 판단되는 경우

③ 기타 구매신청을 승낙하는 것이 "나이키닷컴" 기술 상 현저히 지장이 있다고 판단하는 경우

2. "나이키닷컴"의 승낙이 제12조 제1항의 수신확인 통지형태로 이용자에게 도달한 시점에 구매계약이 성립한 것으로 봅니다.

3. "나이키닷컴"의 승낙의 의사표시에는 이용자의 구매신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.

제11조 (지급방법)

"나이키닷컴"에서 구매한 상품에 대한 대금지급방법은 다음 각 호의 방법 중 가용한 방법으로 할 수 있습니다. 단, "나이키닷컴"은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.

1. 인터넷 뱅킹 등의 각종 계좌이체

2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제

3. 기타 전자적 지급 방법에 의한 대금 지급 등

제12조 (수신확인통지/구매신청 변경 및 취소)

1. "나이키닷컴"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.

2. 수신확인 통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고, "나이키닷컴"은 배송 전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만, 이미 대금을 지불한 경우에는 제 15조의 청약철회 등에 관한 규정에 따릅니다.

제13조 (재화 등의 공급)

"나이키닷컴"은 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날로부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "나이키닷컴"이 이미 재화 등의 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "나이키닷컴 "은 이용자가 재화 등의 공급 절차 및 진행 사항을 확인 할 수 있도록 적절한 조치를 합니다.

2. "나이키닷컴"은 이용자가 구매한 상품에 대해 배송수단, 수단 별 배송비용 부담자, 수단 별 배송기간 등을 명시합니다. 만약 "나이키닷컴"이 약정배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상하여야 합니다. 다만, "나이키닷컴"이 고의, 과실이 없음을 입증한 경우에는 그러하지 아니합니다.

제14조 (환급)

"나이키닷컴"은 이용자가 구매 신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.

제15조 (청약철회)

1. "나이키닷컴"과 상품 등의 구매에 관한 계약을 체결한 이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약 내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에 달리 정함이 있는 경우에는 동법 규정에 따릅니다.

2. 이용자는 재화 등을 배송 받은 경우 다음 각호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.

① 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우. 다만, 재화 등의 내용 확인을 위하여 포장 등을 훼손한 경우는 제외합니다.

② 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우

③ 시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우

④ 같은 성능을 지닌 상품 등으로 복제가 가능한 경우 그 원본인 상품 등의 포장 등을 훼손한 경우

3. 제2항 제2호 내지 제4호의 경우에 "나이키닷컴"이 사전에 청약철회 등이 제한되는 사실을 이용자가 쉽게 알 수 있는 곳에 명기하거나 사용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.

4. 이용자는 제1항 및 제2항의 규정에 불구하고 재화 등의 내용이 표시.광고 내용과 다르거나, 계약내용과 다르게 이행된 경우에는 당해 재화 등을 공급받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회를 할 수 있습니다.

제16조 (청약철회 등의 효과)

1. "나이키닷컴"은 이용자로부터 재화 등을 반환 받은 경우 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다. 이 경우 "나이키닷컴"이 이용자에게 재화 등의 환급을 지연한 때에는 그 지연기간에 대하여「전자상거래 등에서의 소비자보호에 관한 법률 시행령」 제21조의 2에서 정하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.

2. "나이키닷컴"은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.

3. 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. "나이키닷컴"은 이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만, 재화 등의 내용이 표시. 광고 내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 "나이키닷컴"이 부담합니다.

4. 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 "나이키닷컴"은 청약철회 시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명 확하게 표시합니다.

제17조 (MVP회원등급 및 혜택)

"나이키닷컴"은 이용자의 서비스 이용실적에 따라 MVP회원등급을 부여하고 일정 혜택을 제공할 수 있습니다. MVP회원에게 제공되는 혜택 등은 "나이키닷컴"이 정한 MVP정책에 따라 부여되며, 상세한 내역은 아래와 같습니다. (MVP회원 등급 및 혜택 등에 대한 변경은 이 약관 제17조에 변경 공지합니다.)

1. MVP회원등급은 이용자의 나이키닷컴 상품 구매 및 온라인 활동내역에 따라 부여됩니다. 매월 15일에 선정되며, 산정일의 이전달 말일로부터 최근 1년 실구매금액이 100만원 이상일 경우 (주문 취소 및 반품으로 인한 환불 금액 제외) 또는 온라인 활동내역으로 인해 적립된 MiLE이 500MiLE이상 누적되었을 경우 해당됩니다. .

2. MVP회원 자격은 승급일로부터 1년간 유지되며, 이후 다시 최근 1년의 실구매 금액 또는 Mile 누적 금액 기준으로 자격 유지 여부를 재 산정하여, 조건을 만족할 경우 1년간 연장됩니다

3. 자격유지조건은 선정기준과 동일하게 적용되며, 재산정일의 이전달 말일로부터 최근 1년 실구매금액 100만원 이상일 경우 또는 온라인 활동내역으로 인해 적립된 MiLE이 500Mile이상 누적되었을 경우 유지됩니다.

4. MVP회원은 구매 시 구매금액의 5% 할인 혜택 등을 받으실 수 있습니다. MVP회원에게 제공되는 혜택은 "나이키닷컴"이 정하는 정책에 따라 부여되며, 조정될 수 있습니다.

제18조 (MiLE 적립제도)

"나이키닷컴"은 이용자가 나이키닷컴에서 구매활동 및 이벤트 참여, 기타 서비스를 이용할 경우 'MiLE'을 제공하며, 제공 된 MiLE에 따라 일정 혜택 등을 부여할 수 있습니다.

1. MiLE은 서비스 참여 시 즉시 지급되며, 지급된 MiLE은 my쇼핑정보 MiLE 내역에서 확인 할 수 있습니다.

2. MiLE은 나이키닷컴의 서비스 제도로써 “나이키닷컴”에서 상품구매 시 현금으로 사용되지는 않습니다.

3. MiLE은 회원을 탈퇴 할 경우 자동적으로 소멸됩니다.

제19조 (프로모션코드의 사용)

1. 나이키닷컴은 구매서비스를 이용하는 회원에게 상품 구매 시 일정금액 또는 일정비율을 할인 받을 수 있는 프로모션코드를 발급할 수 있습니다.

2. 회원은 프로모션코드를 회원 본인의 구매에 사용할 수 있는 권한만을 가지며, 어떠한 경우에도 이를 타인에게 실질적으로 매매 또는 양도할 수 없습니다.

3. 프로모션코드는 일부 품목이나 금액에 따라 사용이 제한될 수 있으며 유효기간이 지난 후에는 사용할 수 없고, 상품구입 후 취소나 반품으로 인하여 환불이 이루어진 경우에는 재사용이 불가능할 수 있습니다.

4. 구매자에게 제공 된 프로모션코드는 한 상품 구매 시 중복으로 사용 할 수가 없습니다.

제20조 ("나이키닷컴"의 의무)

1. "나이키닷컴"은 법령과 본 약관이 금지하거나 공서 양속에 반하는 행위를 하지 않으며 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 상품을 제공하기 위해서 최선을 다하여야 합니다.

2. "나이키닷컴"은 "이용자"가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 아래와 같은 보안 시스템을 갖추어야 합니다.

① 암호 알고리즘 등의 이용을 통하여 개인 정보를 안전하게 네트워크 상에서 전송 할 수 있는 보안 조치

② 침입 차단 시스템 등 접근 통제 장치의 설치, 운영

③ 기타 안정성 확보를 위하여 필요한 기술적 조치

3. "나이키닷컴"은 "이용자"가 "서비스"를 이용함에 있어 "나이키닷컴"의 고의 또는 중대한 과실로 인하여 입은 손해를 배상할 책임을 부담합니다. 단, 기술적인 보완 조치 및 필요한 조치를 했음에도 불구하고 발생한 해킹 등 기본적인 네트워크 상의 위험성에 의해 발생하는 예기치 못한 사고나 천재지변으로 인한 개인 정보의 훼손 및 서비스의 이상 및 "이용자"가 작성한 게시물에 의한 분쟁에 관해서는 책임이 없습니다.

4. "나이키닷컴"은 사전에 "나이키닷컴"의 정보 수신에 동의한 "이용자"에 한해 정보성, 광고성 전자우편, 문자 메시지, 우편물 및 각종정보를 보낼 수 있습니다.

5. "나이키닷컴"은 "이용자"의 편의를 위해 아래 경로를 통해 "이용자"의 "서비스" 이용과 관련한 모든 불편 사항 및 문의 사항을 처리합니다.

담당자 : Nike.com Consumer Services

소속 : (유)나이키코리아

고객 센터 전화 문의: 080-022-0182

(월-일 오전 9시 - 오후 8시, 명절 (설, 추석) 연휴 휴무)

이메일 문의 : nike.com 사이트 내 '1:1 E-Mail상담' 메뉴 / 이메일 : service@nike.co.kr

채팅 문의 : nike.com 사이트 내 ‘채팅’ 메뉴

제21조 (개인정보보호 및 이용)

1. "나이키닷컴"은 이용자의 정보수집 시 서비스의 제공에 필요한 최소한의 정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은 선택사항으로 합니다.

[필수입력사항]

① 성명

② 이메일주소, 이메일 수신여부

③ 휴대폰번호, SMS 수신여부

④ 희망ID(회원의 경우)

⑤ 비밀번호(회원의 경우)

⑥ 생년월일

⑦ 성별

2. "나이키닷컴"은 개인정보를 수집/이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.

3. "나이키닷컴"은 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용 목적이 발생한 경우 또는 제3자 (제휴사를 포함 함)에게 제공 하는 경우에는 이용/제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 다음의 경우에는 예외로 합니다.

① 배송 업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우

② 정보통신서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적, 기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우

③ 정보통신서비스(전자상거래 등)의 제공에 따른 요금정산을 위하여 필요한 경우

④ 법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우

4. "나이키닷컴"은 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는 자, 제공목적 및 제공할 정보의 내용)등 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등에서 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.

5. 이용자는 "나이키닷컴"에 등록한 자신의 개인정보에 대해 언제든지 열람하거나 오류의 정정을 요구할 수 있으며 "나이키닷컴"은 즉시 이에 응하여야 합니다. 이용자가 오류의 정정을 요구한 경우에는 "나이키닷컴"은 그 오류를 정정할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.

6. "나이키닷컴"은 개인정보 보호를 위하여 이용자의 개인정보를 처리하는 자를 최소한으로 제한하여야 하며 이용자의 개인정보의 상실, 유출, 변조, 훼손이 유발 될 경우 “나이키닷컴”은 즉각 이용자에게 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.

7. "나이키닷컴"은 “나이키닷컴”으로부터 개인정보를 제공 받은 제3자가 개인정보의 수집 또는 제공 받은 목적을 달성한 때에는 당해 개인정보를 파기 및 삭제하도록 지시합니다.

8. "나이키닷컴"은 이용자에게 제공하는 서비스의 양적, 질적 향상을 위하여 이용자의 개인 식별이 가능한 개인정보를 이용자의 동의를 받아 수집 후 맞춤서비스, 전자상거래, 커뮤니티, 컨텐츠, 모바일에 이용할 수 있습니다. 단, "이용자"는 "나이키닷컴"에서 직접 진행하는 일체의 텔레마케팅에 대해 거부 의사를 밝힐 수 있으며, "나이키닷컴"에 통지한 경우, "나이키닷컴"은 텔레마케팅 거부자 리스트(Do-Not-Call-List)에 등록하여 고객불편을 최소화 합니다.

9. "나이키닷컴"이 제3자에게 회원의 개인정보를 제공하려는 경우다 음 각 호의 모든 사항에 대하여 회원에게 알리고 동의를 받습니다.

①개인정보를 제공받는 자

②개인정보를 제공받는 자의 개인정보 이용목적

③제공하려는 개인정보의 항목

④개인정보를 제공받는 자의 개인정보 보유 및 이용기간

10. "나이키닷컴"이 회원의 개인정보를 수집, 이용, 제공 등을 할 경우에는 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 회원의 동의를 받습니다.

11. "회원"은 원하는 경우 언제든 "나이키닷컴"에 제공한 개인정보의 수집과 이용에 대한 동의를 철회할 수 있으며 동의의 철회는 회원 탈퇴를 하는 것으로 이루어집니다.

※ 개인정보와 관련된 보다 자세한 사항은 개인정보 처리방침을 참조하시기 바랍니다.

※ 개인정보 처리 위탁처리 현황

"나이키닷컴"은 서비스 향상을 위해 고객의 개인정보를 외부에 위탁하여 처리하고 있으며, 관계법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 규정하고 있습니다. 현재, "나이키닷컴"의 개인정보처리 수탁자와 그 업무의 내용은 다음과 같습니다.
`

const Register = ({
    onChangeUsername,
    onChangePassword,
    onChangeEmail,

    register,
    handleSubmit,
    errors,
    onSubmit,
}) => {

	return (
    <RegisterContainer>
        <div align="center" className="form">
        <h2>나이키 멤버 가입</h2>
        <p>멤버가 되어 나이키가 제공하는</p>
        <p>최고의 제품과 혜택을 만나보세요</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput 
                cn="RegisterInputBox" 
                type="text" 
                name="username" 
                register={register} 
                errors={errors&&errors['username']}
                changed={onChangeUsername}
            />
            <FormInput 
                cn="RegisterInputBox" 
                type="password" 
                name="password" 
                register={register} 
                errors={errors&&errors['password']}
                changed={onChangePassword}
            />
            <FormInput 
                cn="RegisterInputBox" 
                type="text" 
                name="email" 
                register={register} 
                errors={errors&&errors['email']}
                changed={onChangeEmail}
            />
            <div className="policyBox">
                {policy}
            </div>
            <label className="checkbox">
                <input
                    type="checkbox"
                    value="remember-me"
                    id="rememberMe"
                    name="rememberMe"
                    ref={register} 
                />{" "}
                [필수] 개인정보 수집,이용 동의
            </label><br/>
            <input type="submit" className="registerButton" data-testid="button" />
            {/* 회원가입하기 (만 14세 이상)</input> */}
        </form>
            </div>
    </RegisterContainer>
	);
};

export default withRouter(Register);