import sys
import torch
from PIL import Image
from transformers import AutoImageProcessor, ConvNextV2ForImageClassification

# 이미지 파일 경로를 명령줄 인자에서 받기
image_file_path = sys.argv[1]

# 모델 초기화
extractor = AutoImageProcessor.from_pretrained("Pavarissy/ConvNextV2-large-DogBreed")
model = ConvNextV2ForImageClassification.from_pretrained("Pavarissy/ConvNextV2-large-DogBreed")
idx2label = model.config.id2label

def analyze_image(image_file_path):
    try:
        # 이미지 로드
        image = Image.open(image_file_path)

        # 이미지를 모델 입력 형식으로 변환
        inputs = extractor(images=image, return_tensors="pt")

        # 모델 예측
        with torch.no_grad():
            logits = model(**inputs).logits
            probabilities = torch.softmax(logits, dim=1)

        # 확률 계산 및 상위 3개 클래스 추출
        top_prob, top_cls = probabilities.topk(3)

        # 결과 출력 (CSV 형식)
        for i in range(top_cls.size(1)):
            cls = idx2label[top_cls[0, i].item()]
            prob = top_prob[0, i].item()
            print(f"{cls},{prob}")

    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)
        sys.exit(1)

# 이미지 분석 함수 실행
analyze_image(image_file_path)
