---
permalink: /
title: "" 
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* === Page Setup (Neutral Light Background) === */


/* === General Page Layout === */

/* === Announcement Box Container === */
.hiring-box {
  position: absolute;;
  top: 136px;
  right: 20px;
  width: 440px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(90, 180, 255, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(150, 200, 255, 0.4);
  overflow: hidden;
  animation: slideInRight 1.2s ease;
  z-index: 999;
}

/* === Slide In Animation === */
@keyframes slideInRight {
  0% { transform: translateX(120%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/* === Header Section === */
.hiring-header {
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  color: white;
  text-align: center;
  padding: 7px;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  position: relative;
}

.hiring-header::after {
  content: "🌟";
  position: absolute;
  right: 15px;
  animation: spin 6s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* === Content Section === */
.hiring-content {
  padding: 10px ;
  text-align: center;
  color: #1a2a3a;
  font-size: 0.95rem;
  line-height: 1.2;
}

.hiring-content strong {
  color: #0078d7;
}

/* === Call to Action Button === */
.hiring-btn {
  display: inline-block;
  background: linear-gradient(90deg, #3a95f2, #5ee6ff);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.hiring-btn:hover {
  background: linear-gradient(90deg, #5ee6ff, #3a95f2);
  box-shadow: 0 0 10px rgba(80, 180, 255, 0.6);
}

/* === Glow Border Animation === */
.hiring-box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, #5ee6ff, #3a95f2, #0078d7);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderGlow 8s linear infinite;
}
@keyframes borderGlow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}


/* === Glassmorphism Container === */
.announcement-box {
  width: 90%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(180, 200, 255, 0.4);
  box-shadow: 0 8px 25px rgba(180, 210, 255, 0.35);
  overflow: hidden;
  position: relative;
  animation: glowPulse 8s infinite ease-in-out;
}

/* === Gentle Glow Animation === */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(90, 180, 255, 0.3); }
  50% { box-shadow: 0 0 35px rgba(90, 180, 255, 0.55); }
}

/* === Header === */
.announcement-header {
  background: linear-gradient(90deg, #5eb8ff, #3a95f2, #5ee6ff);
  text-align: center;
  padding: 7px 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.announcement-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05), rgba(255,255,255,0.25));
  animation: headerShine 6s linear infinite;
}

@keyframes headerShine {
  0% { left: -50%; }
  100% { left: 100%; }
}

/* === Scrolling Area === */
.announcement-content {
  height: 200px;
  overflow: hidden;
  color: #1a2a3a;
  padding: 15px 20px;
  background: rgba(255,255,255,0.4);
}

.scroll-area {
  display: flex;
  flex-direction: column;
  animation: scrollFuture 20s linear infinite;
}

.scroll-area:hover {
  animation-play-state: paused;
}

@keyframes scrollFuture {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-50%); }
}

/* === Individual Announcement === */
.announcement-item {
  border-bottom: 1px solid rgba(150, 180, 255, 0.2);
  padding: 7px 0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.announcement-item span.icon {
  color: #3a95f2;
  text-shadow: 0 0 6px rgba(80, 180, 255, 0.8);
  font-size: 1.1rem;
}

.announcement-item strong {
  color: #0078d7;
}

.announcement-item:hover {
  transform: translateX(6px);
  color: #005fa3;
}

/* === Subtle Glow Lines (Top + Bottom) === */
.announcement-box::before,
.announcement-box::after {
  content: "";
  position: absolute;
  width: 120%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5eb8ff, transparent);
  top: 0;
  left: -10%;
  animation: moveLine 9s linear infinite;
}

.announcement-box::after {
  bottom: 0;
  top: auto;
  animation-delay: 4s;
}

@keyframes moveLine {
  0% { transform: translateX(-50%); opacity: 0.6; }
  100% { transform: translateX(50%); opacity: 0.6; }
}
</style>



<!-- === Announcement Box === -->
<div class="hiring-box">
  <div class="hiring-header">🎓 Student Hiring</div>
  <div class="hiring-content">
    <p> I'm seeking students for PhD & master, research in:</p>
      <ul style="list-style: none; padding: 0; margin: 0; text-align: center;">
      <li>🔹 Quantum Cloud & Edge Computing</li>
      <li>🔹 Agentic-based (LLM) Scheduling</li>
      <li>🔹 AI-driven IoT Applications</li>
    </ul>       
    <p> <strong> Mail me </strong>  your CV to join our innovation-driven environment to explore next-gen computing!</p>    
  </div>
</div>


<!-- === Futuristic Announcement Box (Light Theme) === -->
<div class="announcement-box">
  <div class="announcement-header">✨ Recent iQCloudLab Highlights</div>
  <div class="announcement-content">
    <div class="scroll-area">
      <div class="announcement-item"><span class="icon">🚀</span> <strong>Publication:</strong> Quantum–Edge Resource Scheduling accepted at IEEE CloudNet 2025.</div>
      <div class="announcement-item"><span class="icon">🧠</span> <strong>Symposium:</strong> “AI for Quantum Networks” — Tokyo, March 2026.</div>
      <div class="announcement-item"><span class="icon">🔬</span> <strong>Launch:</strong> QEdge 2.0 — Adaptive Hybrid Cloud Framework.</div>
      <div class="announcement-item"><span class="icon">🏆</span> <strong>Award:</strong> Recognized for Excellence in Edge-AI Research 2025.</div>
      <div class="announcement-item"><span class="icon">🌐</span> <strong>Collaboration:</strong> Joint Project with European Quantum Network.</div>

      <!-- Duplicate for smooth infinite scroll -->
      <div class="announcement-item"><span class="icon">🚀</span> <strong>Publication:</strong> Quantum–Edge Resource Scheduling accepted at IEEE CloudNet 2025.</div>
      <div class="announcement-item"><span class="icon">🧠</span> <strong>Symposium:</strong> “AI for Quantum Networks” — Tokyo, March 2026.</div>
      <div class="announcement-item"><span class="icon">🔬</span> <strong>Launch:</strong> QEdge 2.0 — Adaptive Hybrid Cloud Framework.</div>
      <div class="announcement-item"><span class="icon">🏆</span> <strong>Award:</strong> Recognized for Excellence in Edge-AI Research 2025.</div>
      <div class="announcement-item"><span class="icon">🌐</span> <strong>Collaboration:</strong> Joint Project with European Quantum Network.</div>
    </div>
  </div>
</div>



Biography
------
Rahul Yadav  is currently an Associate Professor in the [School of Computer Science](https://www.nottingham.edu.cn/en/science-engineering/departments-schools/cs/home.aspx){:target="_blank"} at the [University of Nottingham, UK (China campus)](https://www.nottingham.edu.cn/en/){:target="_blank"}, where he has also served as an Assistant Professor since 2019. Before this, he was a Postdoctoral Research Fellow at the [Norwegian University of Science and Technology (NTNU)](https://www.ntnu.edu/){:target="_blank"}, the [National University of Singapore (NUS)](https://www.nus.edu.sg/){:target="_blank"}, and [Nanyang Technological University (NTU), Singapore](https://www.ntu.edu.sg/){:target="_blank"}. He also worked in different engineering colleges as a lecturer and in the IT industry as a software professional. He has over 14 years of experience in teaching and research, as well as 1.5 years of industrial experience at IBM. He has completed all his PhD, Master of Engineering, and Bachelor of Technology in Computer Science and Engineering. He also completed a Postgraduate Certificate in Higher Education (PGCHE) in 2023. He received the prestigious Erasmus Mundus Postdoctoral Fellowship from the European Commission, the ERCIM Alain Bensoussan Fellowship from the European Union, and the SERB OPD Fellowship from the Department of Science and Technology, Government of India. He has received the 2020 IEEE Systems Journal Best Paper Award. He has received six research grants for conducting research-based projects, three of them as a Principal Investigator (PI). He also received many travel grants to attend conferences and doctoral colloquiums. He is the author of over 70 scholarly research papers that have appeared in prestigious journals, conferences, book chapters, and IT magazines. He has also published one authored and three edited books. He is the inventor of five patents. He has organized the ICIoT2024 and ICDSEC2025 conferences with a team. He has also chaired numerous conference committees, collaborated with a team to organize short-term courses, and delivered a few Keynote and Invited talks at international conferences and institutions. He has also served on the editorial boards of several international journals. He is a Senior Member of IEEE, a Senior Fellow of the Higher Education Academy (SFHEA), UK, a Fellow of the Institution of Electronics & Telecommunication Engineers (FIETE), India, and a Chartered Engineer (CEng) from the Engineering Council, UK. The Ningbo Municipal Government in China has recognised him as a High-Level Talent. Dr. Kar mainly teaches Computer Networks and programming-related modules. His research areas include Ad Hoc Networks, Wireless Sensor Networks, Internet of Things, Content-Centric Networking, Blockchain, BigData, and Quantum Communication.

The full CV is available [here](/files/Pushpendu_Kar_CV.pdf){:target="_blank"}.

Professional Experiences (17 Yrs+)
------
<ul>
  <li>Associate Professor, School of Computer Science, University of Nottingham, UK (China campus) (Aug 2025 - Present)</li>
  <li>Assistant Professor, School of Computer Science, University of Nottingham, UK (China campus) (Mar 2019 - July 2025)</li>
  <li>Research Fellow, Dept. of ICT and Natural Sciences, Norwegian University of Science and Technology, Norway (Feb 2018 - Jan 2019)</li>
  <li>Postdoctoral Research Fellow, Dept. of Electrical and Computer Engineering, National University of Singapore, Singapore (Nov 2016 - Jan 2018)</li>
  <li>Postdoctoral Research Fellow, Energy Research Institute, Nanyang Technological University, Singapore (Nov 2015 - Nov 2016)</li>
  <li>Researcher, Dept. of Electronics and Electrical Communication Engineering, IIT Kharagpur, India (Apr 2014 - Aug 2014)</li>
  <li>Visiting Lecturer, AMIE Course, Institute of Engineers (Kharagpur Local Center), India (Oct 2011 - Nov 2013)</li>
  <li>Senior Project Assistant, Dept. of Computer Science and Engineering, IIT Kharagpur, India (Oct 2011 - Mar 2013)</li>
  <li>Associate System Engineer, IBM, India (Jun 2010 - Oct 2011)</li>
  <li>Lecturer, Dept. of Information Technology, Birbhum Institute of Engineering & Technology, India (Apr 2006 - Jul 2008)</li>
  <li>Lecturer, Dept. of Computer Science and Engineering, Siliguri Institute of Technology, India (July 2005 - Apr 2006)</li>
  <li>Visiting Lecturer, Bachelor of Computer Application, IT Center, North Bengal University, India (Aug 2005 - Apr 2006)</li>
</ul>

Academic Qualifications
------
<ul>
  <li>Doctor of Philosophy (<i>Ph.D</i>), Dept. of Computer Science and Engineering, Indian Institute of Technology Kharagpur, India (Jan 2012 - Jan 2016)</li>
  <li>Master of Engineering (<i>M.E.</i>), Dept. of Computer Science and Engineering, Jadavpur University, India (Jul 2008 - Jun 2010)</li>
  <li>Bachelor of Technology (<i>B.Tech</i>), Dept. of Computer Science and Engineering, University of Kalyani, India (Jun 2000 - May 2004)</li>
</ul>

Professional Qualifications/Memberships
------
<ul>
  <li>Senior Fellow of Higher Education Academy (<i>SFHEA</i>), AdvanceHE, UK, July 2023, Registration No.: PR269780</li>
  <li>Fellow, The Institution of Electronics & Telecommunication Engineers (<i>IETE</i>), India, September 2023, Registration No.: F-504050</li>
  <li>Chartered Engineer (<i>CEng</i>), Engineering Council, UK, April 2024, Registration No.: 709992</li>
  <li>Senior Member, The Institute of Electrical and Electronics Engineers (IEEE), USA, July 2020, Registration No.: 93025879</li>
  <li>Sun Certified Java Programmer (<i>SCJP</i>) 5.0, Sun Microsystems, USA, March 2009, Registration No.: SW409182</li>
</ul>

Pedagogical Qualifications
------
<ul>
  <li>Postgraduate Certificate in Higher Education (<i>PGCHE</i>)[a master's level teaching qualification] by following the UK Professional Standards Framework (UKPSF) of AdvanceHE, UK, November 2023</li>
</ul>

Professional Training
------
<ul>
  <li>Completed eight weeks (21st May 2006 – 14th July 2006) Finishing School program from NIT Durgapur, Durgapur, India, conducted by MHRD in collaboration with AICTE, Department of IT, NASSCOM, and IIT Roorkee, 2006</li>
  <li>Six months of training on J2EE from “STG International (Regional Office)”, Minto Park, Kolkata, India, 2005</li>
  <li>Three months of training on JAVA (Core & Advanced) from “CMC Ltd.”, Gariahat, Kolkata, India, 2005</li>
  <li>Three weeks (4th – 23rd January 2010) UGC sponsor refresher course on Wireless Ad-Hoc and Sensor Networks, Jadavpur University, Kolkata, India, 2010</li>
  <li>Six months of training on Hardware & Networking from “Computer Foundation”, Jadavpur, Kolkata, India, 2004</li>
</ul>