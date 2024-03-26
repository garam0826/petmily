from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import csv

# WebDriver 설정
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

breeds = ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Klee Kai", "Alaskan Malamute", "American Bulldog", "American English Coonhound",
          "American Eskimo Dog", "American Foxhound", "American Hairless Terrier", "American Leopard Hound", "American Staffordshire Terrier", "American Water Spaniel",
          "Anatolian Shepherd Dog", "Appenzeller Sennenhund", "Australian Cattle Dog", "Australian Kelpie", "Australian Shepherd", "Australian Stumpy Tail Cattle Dog",
          "Australian Terrier", "Azawakh", "Barbado da Terceira", "Barbet", "Basenji", "Basset Fauve de Bretagne", "Basset Hound", "Bavarian Mountain Scent Hound", "Beagle",
          "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Laekenois", "Belgian Malinois", "Belgian Sheepdog", "Belgian Tervuren", "Bergamasco Sheepdog",
          "Berger Picard", "Bernese Mountain Dog", "Bichon Frise", "Biewer Terrier", "Black and Tan Coonhound", "Black Russian Terrier", "Bloodhound", "Bluetick Coonhound",
          "Boerboel", "Bohemian Shepherd", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres", "Boxer", "Boykin Spaniel",
          "Bracco Italiano", "Braque du Bourbonnais", "Braque Francais Pyrenean", "Briard", "Brittany", "Broholmer", "Brussels Griffon", "Bull Terrier", "Bulldog", "Bullmastiff",
          "Cairn Terrier", "Canaan Dog", "Cane Corso", "Cardigan Welsh Corgi", "Carolina Dog", "Catahoula Leopard Dog", "Caucasian Shepherd Dog", "Cavalier King Charles Spaniel",
          "Central Asian Shepherd Dog", "Cesky Terrier", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested", "Chinese Shar-Pei", "Chinook", "Chow Chow", "cirneco-delletna",
          "Clumber Spaniel", "Cocker Spaniel", "Collie", "Coton de Tulear", "Croatian Sheepdog", "Curly-Coated Retriever", "Czechoslovakian Vlcak", "Dachshund", "Dalmatian",
          "Dandie Dinmont Terrier", "Danish-Swedish Farmdog", "Deutscher Wachtelhund", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux", "Drentsche Patrijshond", "Drever",
          "Dutch Shepherd", "English Cocker Spaniel", "English Foxhound", "English Setter", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher Mountain Dog",
          "Estrela Mountain Dog", "Eurasier", "Field Spaniel", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "French Spaniel",
          "German Longhaired Pointer", "German Pinscher", "German Shepherd Dog", "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer",
          "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "grand-basset-griffon-vendeen", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound",
          "Hamiltonstovare", "Hanoverian Scenthound", "Harrier", "Havanese", "Hokkaido", "Hovawart", "Ibizan Hound", "Icelandic Sheepdog", "Irish Red and White Setter",
          "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Jagdterrier", "Japanese Akitainu", "Japanese Chin", "Japanese Spitz",
          "Japanese Terrier", "Jindo", "Kai Ken", "Karelian Bear Dog", "Keeshond", "Kerry Blue Terrier", "Kishu Ken", "Komondor", "Kromfohrlander", "Kuvasz", "Labrador Retriever",
          "Lagotto Romagnolo", "Lakeland Terrier", "Lancashire Heeler", "Lapponian Herder", "Leonberger", "Lhasa Apso", "lowchen", "Maltese", "Manchester Terrier (Standard)",
          "Manchester Terrier (Toy)", "Mastiff", "Miniature American Shepherd", "Miniature Bull Terrier", "Miniature Pinscher", "Miniature Schnauzer", "Mountain Cur", "Mudi",
          "Neapolitan Mastiff", "Nederlandse Kooikerhondje", "Newfoundland", "Norfolk Terrier", "Norrbottenspets", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund",
          "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Parson Russell Terrier", "Pekingese", "Pembroke Welsh Corgi",
          "Perro de Presa Canario", "Peruvian Inca Orchid", "petit-basset-griffon-vendeen", "Pharaoh Hound", "Plott Hound", "Pointer", "Polish Lowland Sheepdog", "Pomeranian",
          "Poodle (Miniature)", "Poodle (Standard)", "Poodle (Toy)", "Porcelaine", "Portuguese Podengo", "Portuguese Podengo Pequeno", "Portuguese Pointer", "Portuguese Sheepdog",
          "Portuguese Water Dog", "Pudelpointer", "Pug", "Puli", "Pumi", "Pyrenean Mastiff", "Pyrenean Shepherd", "Rafeiro do Alentejo", "Rat Terrier", "Redbone Coonhound",
          "Rhodesian Ridgeback", "Romanian Carpathian Shepherd", "Romanian Mioritic Shepherd Dog", "Rottweiler", "Russell Terrier", "Russian Toy", "Russian Tsvetnaya Bolonka",
          "Saint Bernard", "Saluki", "Samoyed", "Schapendoes", "Schipperke", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Segugio Italiano", "Shetland Sheepdog",
          "Shiba Inu", "Shih Tzu", "Shikoku", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Slovakian Wirehaired Pointer", "Slovensky Cuvac", "Slovensky Kopov",
          "Small Munsterlander", "Smooth Fox Terrier", "Soft Coated Wheaten Terrier", "Spanish Mastiff", "Spanish Water Dog", "Spinone Italiano", "Stabyhoun",
          "Staffordshire Bull Terrier", "Standard Schnauzer", "Sussex Spaniel", "Swedish Lapphund", "Swedish Vallhund", "Taiwan Dog", "Teddy Roosevelt Terrier", "Thai Ridgeback",
          "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tornjak", "Tosa", "Toy Fox Terrier", "Transylvanian Hound", "Treeing Tennessee Brindle", "Treeing Walker Coonhound",
          "Vizsla", "Volpino Italiano", "Weimaraner", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "Wetterhoun", "Whippet", "Wire Fox Terrier",
          "Wirehaired Pointing Griffon", "Wirehaired Vizsla", "Working Kelpie", "Xoloitzcuintli", "Yakutian Laika", "Yorkshire Terrier"]   # 여기에 모든 종의 목록을 넣으세요.

# 특성 점수를 추출하는 함수
def get_trait_score(trait_name):
    xpath = f"//h4[contains(text(), '{trait_name}')]/following-sibling::div//div[contains(@class, 'breed-trait-score__score-unit--filled')]"
    filled_units = driver.find_elements(By.XPATH, xpath)
    return len(filled_units)


# 특정 요소의 텍스트 콘텐츠를 추출하는 함수
def get_element_text(css_selector):
    try:
        elements = driver.find_elements(By.CSS_SELECTOR, css_selector)
        return " / ".join([element.text for element in elements])
    except Exception as e:
        print(f"An error occurred while retrieving text from {css_selector}: {e}")
        return ""

# CSV 파일 초기화 및 헤더 작성
with open('dogs_re.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    headers = [
        'Breed', 'Characteristic', 'Height', 'Weight', 'Life Expectancy',
        'Affectionate With Family', 'Good With Young Children', 'Good With Other Dogs',
        'Shedding Level', 'Coat Grooming Frequency', 'Drooling Level', 'Openness To Strangers',
        'Watchdog/Protective Nature', 'Playfulness Level', 'Adaptability Level',
        'Trainability Level', 'Barking Level', 'Energy Level', 'Mental Stimulation Needs'
    ]
    writer.writerow(headers)

# 각 종에 대한 특성 점수 추출 및 CSV 파일에 데이터 기록
for breed in breeds:
    breed_url = breed.lower().replace(" ", "-")
    driver.get(f"https://www.akc.org/dog-breeds/{breed_url}/")

    # 특성 점수 추출
    scores = [
        get_trait_score("Affectionate With Family"),
        get_trait_score("Good With Young Children"),
        get_trait_score("Good With Other Dogs"),
        get_trait_score("Shedding Level"),
        get_trait_score("Coat Grooming Frequency"),
        get_trait_score("Drooling Level"),
        get_trait_score("Openness To Strangers"),
        get_trait_score("Watchdog/Protective Nature"),
        get_trait_score("Playfulness Level"),
        get_trait_score("Adaptability Level"),
        get_trait_score("Trainability Level"),
        get_trait_score("Barking Level"),
        get_trait_score("Energy Level"),
        get_trait_score("Mental Stimulation Needs")
    ]

    # 추가 특성 추출
    # 특성 텍스트 추출
    characteristic = get_element_text(".breed-page__intro__temperment")
    height = get_element_text(".breed-page__hero__overview__icon-block:nth-of-type(1) p")
    weight = get_element_text(".breed-page__hero__overview__icon-block:nth-of-type(2) p")
    life_expectancy = get_element_text(".breed-page__hero__overview__icon-block:nth-of-type(3) p")

    # CSV 파일에 데이터 기록
    with open('dogs_re.csv', 'a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([breed, characteristic, height, weight, life_expectancy,] + scores)

# 드라이버 종료
driver.quit()


