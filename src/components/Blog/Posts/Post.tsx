import React, {useState, useEffect, ChangeEvent} from "react";
import './Post.css'
import { RxAvatar } from "react-icons/rx";
import { FaClock } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

interface Props{
    name: string;
}

const Post =()=>{

    const [data, setData] = useState<Props | null>(null);

    const link = 'https://mica-soft-makeup.glitch.me';

    useEffect(() => {
        fetch(`${link}/api/profile`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      const DataTransfer = {
        Now: () => {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
        //   const seconds = now.getSeconds().toString().padStart(2, '0');
          const year = now.getFullYear();
          const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
          const day = now.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
      };
      
      
      const [currentTime, setCurrentTime] = useState(DataTransfer.Now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DataTransfer.Now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);





  const [text, setText] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        renderContent();
    };

    const renderContent = () => {
        return text.split('\n').map((line, index) => {
            
            if (line.startsWith('#')) {
                return <h2 key={index}>{line.slice(1).trim()}</h2>;
            } else if (line.startsWith('>')) {
                return <p key={index}>{line.slice(1).trim()}</p>;
            } else {
                return null;
            }
        });
    };



    return(

        <div className="post-container">
<div className="info-line">
                <h3>
                    <RxAvatar /> {data?.name}
                </h3>
                <div style={{display: 'flex', paddingLeft: '25px'}}>
                    <span> <FaClock /> {currentTime} </span>
                    <span> <MdCategory /> About Project </span>
                </div>
                
            </div>
            <div className="text-container">
<h2>შესავალი</h2> 
<p>
    მე ვარ როლანდ ართმელაძე, დამწყები ვებ დეველოპერი. ციფრული სამყარო ბავშვური მაინტერესებდა. ეს იყო რაღაც ჯადოსნური გარემო, რომელიც მიუწვდომელი მეჩვენებოდა. მაინტერესებდა მრავალი გამოწვევის გადაჭრა, მაგალითად, ბრაუზერის ეკრანზე მონაცემების გამოტანა, განსაზღვრა და დინამიკური მოქმედების პრინციპი.
</p>

<h2>მოგზაურობა ვებ განვითარებისკენ</h2>
<p>
    დიდი დრო გავიდა და ეს სფერო კიდევ უფრო გახდა. ტექნოლოგიების მიღწევების მიღწევა, ახლა შესაძლებელია მსოფლიოში ნებისმიერ ადგილას, მხოლოდ ლეპტით და ინტერნეტით. ეს იყო ერთ-ერთი მიზეზი, რის გამოც გადავწყვიტე ისევ მეცადა და უკვე გავცნობოდი ამ სამყაროს, რათა ბავშვის დროინდელი გრძნობები და ოცნებები ამესრულებინა.
</p>
<h2>შესაძლებლობების შესწავლა</h2>
<p>
    სანამ სწავლას გავბდი, შევეცადე ცნობოდი იმ შესაძლებლობებს, რითაც მიზნის მისაღწევად შემეძლო. ფართო ძიება იმ ადამიანებისა, ვინც უკვე იცნობდა ამ მიმართულებას და მის პრინციპებს. მათგან გამოცდილების და მოლოდინების გაზიარება მსგავსი წარმოდგენის შემადგენლობით, რაზეც უნდა ვიყოფილიყავი ორიენტირებული მაქსიმალური შედეგის შესახებ.
</p>
<h2>სწორი გზის არჩევა</h2>
<p>
    გადავწყვიტე Front End Developer-ის პროფესიის შესწავლა. ეს არის მომხმარებლის ინტერფეისის შექმნა, რაც შეეხება: მომხმარებლის სურვილების, ინტერესების, შესაძლებლობებისა და განსაზღვრას, გარემოს შექმნისას. სწრაფად განვითარებადი ციფრული სამყარო დიდ როლს თამაშობს, და ამ სფეროს არჩევანია დიდი მოტივაცია იყო.
</p>
<h2>
    დაწყებული BitCamp-ით
    </h2>
<p>
    მოიძიე ორგანიზაციები, რომლებიც სწავლობდნენ ამ მიმართულებით. სწორედ ამ დროს აღმოვაჩინე BitCamp.ge. ვებსა და სოციალური გვერდების გაცნობის შემდეგ რამდენიმე მნიშვნელოვანი რესურსი, რომელიც ხელმისაწვდომია უფასოდ და რაც მთავარია, ქართულად. BitCamp-ის უფასო რესურსები 2022 წლის დასაწყისში.
</p>
<h2>გამოწვევების დაძლევა</h2>
<p>
    სწავლის შევსება უამრავ გამოწვევას, რომელიც რთული და კომპლექსური აღმოჩნდა. არაერთხელ ვთვლით, თუ რა იყო არჩევანის გაკეთება, მაგრამ ყველა იმ მომენტში მხვდებოდნენ იმ ადამიანების უპირატესობას და თავდაუზოგავი შრომის მიზნებს. მათი ისტორიის გაცნობა დიდი მოტივაცია იყო.
</p>
<h2>მომავლის პერსპექტივები</h2>
<p>
    სწავლის თავიდან აცილება, ადამიანები, რომლებიც საჭიროებენ მნიშვნელოვან პრობლემებს, გადაჭრა და ეს იყო იმ უნარების გამოყენება, რომლებიც უკვე შევიძინე. პროექტებზე მუშაობა პარალელურად, ვხვდებოდი BitCamp-ის ზრდასა და განვითარებას, რაც პროცესია.
</p>
<h2>დასკვნა</h2>
<p>მეგობრული და სწრაფად მზარდი გარემო BitCamp-ში ჩემი სწორი არჩევანი იყო. მათ შევძელი საკუთარი შესაძლებლობების დასრულება და განვითარების გზაზე სიარული. ახლა, როგორც ადრე ბავშვობაში, კვლავ მიზიდავს და მხიბლავს ციფრული სამყარო.
</p>
 </div>

<div style={{marginTop: '25px'}}>
    <samp>მეტის ნავხა</samp>
</div>

</div>
    )
}

export default Post;