
(()=>{
'use strict';
const KEY='family-adventure-p1-data-v1';
const G=[['k4','幼兒園中班'],['k5','幼兒園大班'],['g1','國小一年級'],['g2','國小二年級'],['g3','國小三年級'],['g4','國小四年級'],['g5','國小五年級'],['g6','國小六年級']];
const S=[['english','英文冒險島','🔤','en'],['math','數學星球','🪐','ma'],['chinese','國語魔法森林','📖','zh']];
const AVATARS=['🦊','🐼','🐰','🐯','🐻','🐸','🐱','🦁','🐧','🦄'];
const Q={
  k4:{english:['哪個英文單字表示「紅色」？',['Red','Blue','Green'],0,'Red 表示紅色。'],math:['哪一組有 3 個蘋果？',['🍎🍎','🍎🍎🍎','🍎🍎🍎🍎'],1,'數一數，三個蘋果就是 3。'],chinese:['下列哪一個是注音符號？',['ABC','ㄅ','123'],1,'「ㄅ」是注音符號。']},
  k5:{english:['英文大寫字母 A 是哪一個？',['a','B','A'],2,'A 是大寫字母；a 是小寫字母。'],math:['有 5 顆糖，再拿到 2 顆，一共有幾顆？',['6','7','8'],1,'5 加 2 等於 7。'],chinese:['「ㄅㄚ」中的韻母是哪個？',['ㄅ','ㄚ','ㄇ'],1,'「ㄅ」是聲母，「ㄚ」是韻母。']},
  g1:{english:['哪個字是英文的「貓」？',['cat','sun','pen'],0,'cat 是貓。'],math:['9 + 6 = ?',['14','15','16'],1,'9 加 6 等於 15。'],chinese:['「ㄇㄚ」加上第一聲讀起來是？',['媽','馬','罵'],0,'「媽」讀第一聲。']},
  g2:{english:['哪個英文單字表示「書」？',['book','fish','rain'],0,'book 是書。'],math:['7 × 3 = ?',['21','24','28'],0,'7 組 3 個，是 21 個。'],chinese:['下列哪一句用詞較通順？',['我每天閱讀故事書。','我每天書故事閱讀。','我閱讀每天故事書。'],0,'句子的語序要清楚、通順。']},
  g3:{english:['哪個英文單字表示「星期一」？',['Monday','Friday','Sunday'],0,'Monday 是星期一。'],math:['248 + 375 = ?',['613','623','633'],1,'248 加 375 等於 623。'],chinese:['「迫不及待」比較接近哪個意思？',['非常期待，急著行動','很想睡覺','完全不在乎'],0,'迫不及待表示急切、無法再等待。']},
  g4:{english:['Choose the correct sentence.',['She like apples.','She likes apples.','She liking apples.'],1,'第三人稱單數一般現在式用 likes。'],math:['長方形長 8 公分、寬 5 公分，面積是？',['13 平方公分','26 平方公分','40 平方公分'],2,'8 × 5 = 40 平方公分。'],chinese:['文章的「主旨」通常是指？',['作者想表達的主要意思','標點符號數量','第一個出現的人名'],0,'主旨是文章中心思想。']},
  g5:{english:['Which sentence is a question?',['I have a pencil.','Where is my pencil?','This is a pencil.'],1,'Where is my pencil? 是疑問句。'],math:['12 和 18 的最大公因數是多少？',['3','6','9'],1,'12 和 18 的公因數有 1、2、3、6，最大是 6。'],chinese:['閱讀兩段觀點不同的文章，最適合先做什麼？',['比較兩位作者的主要理由','只看文章長度','只記下生字數量'],0,'先理解各自的主張和理由，才能有效比較。']},
  g6:{english:['Choose the correct answer: “I went to the park ___.”',['yesterday','tomorrow','every day now'],0,'went 是過去式，yesterday 與過去時間一致。'],math:['長 120 公尺的路程，用 30 秒跑完，平均速度是？',['3 公尺/秒','4 公尺/秒','5 公尺/秒'],1,'速度 = 路程 ÷ 時間 = 120 ÷ 30 = 4 公尺/秒。'],chinese:['下列哪項比較能判斷一篇評論的可信度？',['是否提供可查證的證據','文章字體多大','標題用了幾個驚嘆號'],0,'有可查證證據及合理論述較可信。']}
};


// 第二、第三關題目。第一關延用上一版的 Q，以便保留既有通關進度。
const MORE={
 k4:{english:[['哪一個是英文「狗」？',['dog','sun','book'],0,'dog 是狗。'],['請找出代表「藍色」的英文。',['Green','Blue','Red'],1,'Blue 是藍色。']],math:[['數一數，有幾顆星星？ ⭐⭐⭐⭐',['3','4','5'],1,'有四顆星星。'],['哪個形狀有三個角？',['◯','□','△'],2,'三角形有三個角。']],chinese:[['哪一個是注音「ㄇ」？',['ㄉ','ㄇ','ㄊ'],1,'ㄇ 是注音符號。'],['「蘋果」是什麼？',['🍎','🐱','☂️'],0,'蘋果是水果。']]},
 k5:{english:[['小寫字母 b 對應哪個大寫字母？',['D','B','P'],1,'b 對應大寫 B。'],['哪個英文單字是「貓」？',['cat','car','sun'],0,'cat 是貓。']],math:[['8 個積木拿走 3 個，剩幾個？',['5','6','4'],0,'8－3＝5。'],['哪個數字排在 14 後面？',['13','15','12'],1,'14 後面是 15。']],chinese:[['ㄅ 和 ㄧ 合在一起可以拼成？',['ㄅㄧ','ㄇㄚ','ㄉㄨ'],0,'ㄅ＋ㄧ 可以拼成 ㄅㄧ。'],['「ㄇㄚˇ」是第幾聲？',['第二聲','第三聲','第四聲'],1,'ˇ 表示第三聲。']]},
 g1:{english:[['哪一個是「太陽」？',['moon','sun','milk'],1,'sun 是太陽。'],['選出英文數字 three。',['1','2','3'],2,'three 是數字 3。']],math:[['18－9＝？',['9','8','10'],0,'18－9＝9。'],['把 7 和 8 加起來是多少？',['14','15','16'],1,'7＋8＝15。']],chinese:[['「ㄕㄨ」可以拼出哪個字的讀音？',['書','包','筆'],0,'書的注音是 ㄕㄨ。'],['「快樂」的相反詞比較接近？',['開心','難過','高興'],1,'難過與快樂相對。']]},
 g2:{english:[['Which word means「水」？',['water','apple','chair'],0,'water 表示水。'],['「早安」的英文常見說法？',['Good night','Good morning','Goodbye'],1,'Good morning 表示早安。']],math:[['36＋27＝？',['63','53','73'],0,'36＋27＝63。'],['6×4＝？',['22','24','26'],1,'6×4＝24。']],chinese:[['哪個詞語可以形容非常高興？',['眉開眼笑','垂頭喪氣','無精打采'],0,'眉開眼笑形容很高興。'],['「我把書放在桌上。」誰在放書？',['桌子','我','書'],1,'主語是我。']]},
 g3:{english:[['What color is the banana?（熟香蕉）',['Yellow','Purple','Black'],0,'熟香蕉通常是黃色的。'],['選出正確單字：星期日',['Sunday','Monday','Thursday'],0,'Sunday 是星期日。']],math:[['456－179＝？',['277','287','267'],0,'456－179＝277。'],['72÷8＝？',['8','9','7'],1,'72÷8＝9。']],chinese:[['「井然有序」表示？',['雜亂無章','很有條理','非常吵鬧'],1,'井然有序是整齊有條理。'],['故事裡的「轉折」常代表？',['事情有重要變化','結束標點','故事開頭'],0,'轉折常帶來情節變化。']]},
 g4:{english:[['Choose: He ___ a bike.',['have','has','having'],1,'He 搭配 has。'],['Which word means「圖書館」？',['library','kitchen','garden'],0,'library 是圖書館。']],math:[['360÷12＝？',['30','20','40'],0,'360÷12＝30。'],['0.4＋0.35＝？',['0.39','0.75','0.85'],1,'0.40＋0.35＝0.75。']],chinese:[['找文章重點，最適合先看？',['段落主旨','字體顏色','標題長短'],0,'先掌握各段的主旨。'],['「畫龍點睛」比較接近？',['加上關鍵一筆','畫很多畫','畫在窗上'],0,'指在關鍵處加上精采的一筆。']]},
 g5:{english:[['Which sentence is correct?',['They are playing.','They is playing.','They am playing.'],0,'They 搭配 are。'],['Which word means「因為」？',['because','before','between'],0,'because 表示因為。']],math:[['15 和 25 的最大公因數？',['5','10','15'],0,'共同因數最大是 5。'],['1/2＋1/4＝？',['2/6','3/4','1/6'],1,'1/2＝2/4，合計 3/4。']],chinese:[['比較兩篇文章，首先應？',['理解兩者主張','只比頁數','只看插圖'],0,'先理解各自觀點。'],['「證據」在議論中主要用來？',['支持主張','增加字數','替代標題'],0,'證據能支持論點。']]},
 g6:{english:[['Choose: She ___ her homework yesterday.',['finish','finished','finishes'],1,'yesterday 通常搭配過去式 finished。'],['Which is a polite request?',['Open it now!','Could you help me?','Go away!'],1,'Could you help me? 是有禮貌的請求。']],math:[['路程 240 公尺，速度每秒 6 公尺，需幾秒？',['40 秒','36 秒','46 秒'],0,'時間＝240÷6＝40 秒。'],['3:4 等於哪一個比？',['6:8','9:16','5:6'],0,'比的前後項同乘 2 得 6:8。']],chinese:[['遇到說法不同的文章，最佳做法？',['核對來源和證據','只信標題','選較長的'],0,'比較來源與可查證證據。'],['寫作結論通常需要？',['呼應主題並統整觀點','加入無關細節','重複所有句子'],0,'結論應統整並呼應主題。']]}
};

// P1.6: a small extendable practice bank, separate from the 72 fixed map nodes.
// Kindergarten subjects are playful practice topics, not compulsory achievement targets.
const UNIT_THEMES={
 english:['聽辨與單字','圖詞與情境','簡單語句'],
 math:['數量與運算','關係與解題','形狀與邏輯'],
 chinese:['注音與語音','字詞與理解','組句與表達']
};
const BONUS={
 k4:{english:['哪個是英文的「黃色」？',['Yellow','Purple','Black'],0,'Yellow 表示黃色。'],math:['哪組有兩顆星星？',['⭐','⭐⭐','⭐⭐⭐'],1,'一顆一顆數，共有兩顆。'],chinese:['哪個詞語代表下雨天？',['晴天 ☀️','雨天 🌧️','雪天 ❄️'],1,'有雨滴的圖像表示雨天。']},
 k5:{english:['Which word means「魚」？',['fish','cat','book'],0,'fish 是魚。'],math:['6 顆球再放進 1 顆，共有幾顆？',['6','7','8'],1,'6 加 1 是 7。'],chinese:['「ㄉㄚˋ」的聲調是哪一聲？',['第二聲','第三聲','第四聲'],2,'ˋ 表示第四聲。']},
 g1:{english:['Which word means「牛奶」？',['milk','bird','pen'],0,'milk 表示牛奶。'],math:['12－5＝？',['6','7','8'],1,'12 減 5 等於 7。'],chinese:['「今天是星期一。」的句末標點是？',['。','？','！'],0,'陳述句通常用句號。']},
 g2:{english:['「椅子」的英文是哪一個？',['table','chair','school'],1,'chair 是椅子。'],math:['45＋18＝？',['63','53','73'],0,'45 加 18 等於 63。'],chinese:['「他跑得很快。」哪個字表示動作？',['他','跑','快'],1,'跑表示動作。']},
 g3:{english:['Which day comes after Monday?',['Sunday','Tuesday','Friday'],1,'Monday 之後是 Tuesday。'],math:['84÷7＝？',['11','12','13'],1,'84 除以 7 等於 12。'],chinese:['「迫不及待」的「及」比較接近哪個意思？',['趕得上','到達','來得及'],2,'此成語可理解為急得來不及等待。']},
 g4:{english:['Choose the correct answer: I ___ a book.',['has','have','having'],1,'I 搭配 have。'],math:['正方形邊長 6 公分，周長是多少？',['12','24','36'],1,'6 乘 4 等於 24 公分。'],chinese:['判斷段落的主要內容，最適合先做什麼？',['找主題句','數標點','查字體'],0,'找主題句有助掌握段落主旨。']},
 g5:{english:['Which word means「有時候」？',['always','sometimes','never'],1,'sometimes 是有時候。'],math:['3/4－1/4＝？',['1/2','1/4','2/3'],0,'2/4 可約分成 1/2。'],chinese:['文章引用資料，主要目的是？',['支持論點','增加頁數','改變字型'],0,'引用可靠資料能支持論點。']},
 g6:{english:['Choose: They ___ to school yesterday.',['go','went','going'],1,'yesterday 常使用過去式 went。'],math:['總距離 150 公里，3 小時完成，平均時速？',['45','50','60'],1,'150÷3＝50 公里/小時。'],chinese:['要比較兩則新聞說法，較佳方式是？',['查閱來源並核對證據','只信第一則','看標題長短'],0,'比較原始來源和證據有助判斷可信度。']}
};
const bonusId=(sub,g)=>`bonus_${sub}_${g}_01`;
let practicePick='',practiceAnswer=-1,practiceFeedback=null;
let practiceFilterSubject='all',practiceFilterGrade='all',practiceFilterUnit='all';
let bankFilterSubject='all',bankFilterGrade='all';
let reportChild=null;
let sheetFilterSubject='all',sheetFilterGrade='all',sheetFilterUnit='all',sheetCount=5;
let activeSheetId='',sheetAnswer=-1;
let pendingBatch=null;
function practiceQuestions(){
 const base=[];
 for(const [grade] of G)for(const [subject] of S){const b=BONUS[grade][subject];base.push({id:bonusId(subject,grade),subject,grade,unit:'生活應用與延伸',prompt:b[0],options:b[1],correct:b[2],explanation:b[3],origin:'builtin'});}
 return [...base,...store.customQuestions.filter(q=>q&&typeof q.id==='string')];
}
function visibleQuestions(child){if(!child)return [];return practiceQuestions().filter(q=>child.permissions[q.subject]?.includes(q.grade)&&(q.origin==='builtin'||q.householdId===child.householdId||q.householdId==='all'));}
function latestAttemptFor(childId,questionId,where){const arr=where.filter(p=>p.childId===childId&&p.questionId===questionId);return arr.length?arr[arr.length-1]:null;}
function needsReview(childId,questionId,where){const last=latestAttemptFor(childId,questionId,where);return !!last&&!last.correct;}
function missedStages(child){if(!child)return [];return S.flatMap(([subject])=>getStages(child,subject)).filter(st=>needsReview(child.id,st.key,store.progress));}
function pendingPractice(child){return visibleQuestions(child).filter(q=>needsReview(child.id,q.id,store.practiceAttempts));}
function familyChildOptions(selected){return store.children.map(c=>`<option value="${escapeHTML(c.id)}" ${c.id===selected?'selected':''}>${escapeHTML(c.avatar+' '+c.name+'（'+gradeShort(c.grade)+'）')}</option>`).join('');}
function practiceStatsFor(child){const p=store.practiceAttempts.filter(r=>r.childId===child.id),map=store.progress.filter(r=>r.childId===child.id);return {attempts:p.length,correct:p.filter(x=>x.correct).length,mapAttempts:map.length,mapCorrect:map.filter(x=>x.correct).length,pending:pendingPractice(child).length+missedStages(child).length};}
function usePractice(qid){const c=byChild(selectedChild),q=visibleQuestions(c).find(x=>x.id===qid);if(!q){notify('這個題目不在孩子目前開放的年級中');return;}practicePick=q.id;practiceAnswer=-1;practiceFeedback=null;render();}
function doPracticeAnswer(){const c=byChild(selectedChild),q=visibleQuestions(c).find(x=>x.id===practicePick);if(!c||!q||practiceAnswer<0||practiceFeedback!==null)return;const correct=practiceAnswer===q.correct;store.practiceAttempts.push({id:id(),childId:c.id,questionId:q.id,subject:q.subject,grade:q.grade,unit:q.unit,correct,at:nowISO()});save();practiceFeedback=correct?'correct':'wrong';soundEffect(correct?'win':'try');render();notify(correct?'答對了！這次練習已記錄':'再試一題也沒關係，可以查看解說');}
function bankQuestionCount(){return practiceQuestions().length;}
function practicePage(){
 const c=byChild(selectedChild)||store.children[0];if(!c)return '<div class="empty">請先新增孩子。</div>';selectedChild=c.id;
 const all=visibleQuestions(c);
 const filtered=all.filter(q=>(practiceFilterSubject==='all'||q.subject===practiceFilterSubject)&&(practiceFilterGrade==='all'||q.grade===practiceFilterGrade)&&(practiceFilterUnit==='all'||q.unit===practiceFilterUnit));
 const units=[...new Set(all.filter(q=>(practiceFilterSubject==='all'||q.subject===practiceFilterSubject)&&(practiceFilterGrade==='all'||q.grade===practiceFilterGrade)).map(q=>q.unit))];
 let q=all.find(x=>x.id===practicePick);if(q&&!filtered.some(x=>x.id===q.id))q=null;
 const queue=missedStages(c),extra=pendingPractice(c);
 return `<div class="stack study-page"><section class="study-hero"><div><span class="study-kicker">📖 主線地圖以外的自由學習</span><h2>學習補給站</h2><p>挑選單元、補充練習或回顧錯題。這裡的練習不會扣星星，也不影響地圖解鎖。</p></div><div class="study-hero-art" aria-hidden="true">${escapeHTML(c.avatar)} 📚</div></section><section class="card"><div class="section-head"><div><h2>👦 選擇練習者</h2><p class="muted small">各孩子的題庫權限和複習紀錄互相獨立</p></div><div class="study-stat">📌 待複習 ${queue.length+extra.length}</div></div><select class="field" data-study-child aria-label="選擇練習孩子">${familyChildOptions(c.id)}</select><div class="study-filters"><label>科目<select class="field" data-practice-subject><option value="all">全部科目</option>${S.map(([id,name])=>`<option value="${id}" ${practiceFilterSubject===id?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label><label>年級<select class="field" data-practice-grade><option value="all">全部開放年級</option>${G.map(([id,name])=>`<option value="${id}" ${practiceFilterGrade===id?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label><label>單元<select class="field" data-practice-unit><option value="all">全部單元</option>${units.map(x=>`<option value="${escapeHTML(x)}" ${practiceFilterUnit===x?'selected':''}>${escapeHTML(x)}</option>`).join('')}</select></label></div><div class="toolbar" style="margin-top:15px"><button class="button" data-action="nav" data-page="worksheet">🧭 自動組成今日任務卷 →</button></div></section><div class="grid2"><section class="card"><h2 class="card-title">🌱 單元練習 <span class="pill">${filtered.length} 題</span></h2><div class="bank-grid">${filtered.length?filtered.map(x=>`<button class="bank-topic ${x.id===q?.id?'selected':''}" data-action="practice-open" data-key="${escapeHTML(x.id)}"><span class="bank-subject">${subjIcon(x.subject)} ${escapeHTML(gradeShort(x.grade))} · ${escapeHTML(x.unit)}</span><strong>${escapeHTML(x.prompt)}</strong><small>${needsReview(c.id,x.id,store.practiceAttempts)?'🔁 待複習':latestAttemptFor(c.id,x.id,store.practiceAttempts)?.correct?'✅ 已練習':'✨ 尚未練習'}</small></button>`).join(''):'<div class="empty">此範圍沒有開放題目，可換一個年級或科目。</div>'}</div></section><section class="card practice-panel"><h2 class="card-title">🎯 當前練習</h2>${q?`<div class="pill yellow">${subjIcon(q.subject)} ${escapeHTML(gradeLabel(q.grade))}｜${escapeHTML(q.unit)}</div><h3 class="practice-question">${annotateText(q.prompt,q.grade)}</h3><div class="practice-answers">${q.options.map((o,i)=>`<button data-action="practice-choice" data-option="${i}" ${practiceFeedback!==null?'disabled':''} class="practice-option ${practiceAnswer===i?'selected':''} ${practiceFeedback!==null&&i===q.correct?'right':''}"><span>${'ABC'[i]}</span>${annotateText(o,q.grade)}</button>`).join('')}</div>${practiceFeedback!==null?`<div class="study-result ${practiceFeedback==='correct'?'ok':'try'}"><strong>${practiceFeedback==='correct'?'🎉 答對了！':'💡 這題可以再練習'}</strong><p>${annotateText(q.explanation,q.grade)}</p><p class="mini">紀錄已更新；只計入練習統計，不會影響冒險關卡。</p></div><div class="toolbar"><button class="button secondary" data-action="practice-retry">再練一次</button><button class="button" data-action="practice-next">下一道練習 →</button></div>`:`<div class="toolbar"><button class="button" data-action="practice-submit" ${practiceAnswer<0?'disabled':''}>送出答案</button><button class="button ghost" data-action="practice-retry">重選</button></div>`}`:`<div class="study-empty">🧙‍♀️<h3>選擇左側的單元題目</h3><p>開始自由練習，或往下查看需要複習的關卡。</p></div>`}</section></div><section class="card"><div class="section-head"><div><h2>🔁 錯題複習</h2><p class="muted small">只顯示最後一次尚未答對的項目；再次答對後就會移出清單。</p></div><span class="pill yellow">共 ${queue.length+extra.length} 項</span></div><div class="review-columns"><div><strong>🗺️ 冒險地圖錯題</strong><div class="review-list">${queue.length?queue.map(st=>`<button class="review-item" data-action="review-stage" data-subject="${st.subject}" data-key="${st.key}"><span>🔁 ${escapeHTML(subjName(st.subject))} · ${escapeHTML(gradeShort(st.grade))}</span><strong>${escapeHTML(st.title)} · ${escapeHTML(UNIT_THEMES[st.subject][Number(st.key.slice(-2))-1])}</strong><small>回原始互動關卡重試 →</small></button>`).join(''):'<p class="muted small">目前沒有待複習的地圖關卡。</p>'}</div></div><div><strong>📚 補充題庫錯題</strong><div class="review-list">${extra.length?extra.map(x=>`<button class="review-item" data-action="practice-open" data-key="${escapeHTML(x.id)}"><span>${subjIcon(x.subject)} ${escapeHTML(gradeShort(x.grade))} · ${escapeHTML(x.unit)}</span><strong>${escapeHTML(x.prompt)}</strong><small>重新練習 →</small></button>`).join(''):'<p class="muted small">目前沒有待複習的補充題。</p>'}</div></div></div></section></div>`;
}
// Prototype 1.7: dynamic, permission-scoped practice worksheets.
function filteredSheetQuestions(child){return visibleQuestions(child).filter(q=>(sheetFilterSubject==='all'||q.subject===sheetFilterSubject)&&(sheetFilterGrade==='all'||q.grade===sheetFilterGrade)&&(sheetFilterUnit==='all'||q.unit===sheetFilterUnit));}
function randomOrder(items){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function beginWorksheet(){const child=byChild(selectedChild);const candidates=filteredSheetQuestions(child);if(!candidates.length){notify('這個範圍尚無題目，請換科目或年級');return;}
 const selected=randomOrder(candidates).slice(0,Math.min(sheetCount,candidates.length));const session={id:'sheet_'+id(),childId:child.id,createdAt:nowISO(),completedAt:null,questionIds:selected.map(q=>q.id),answers:{},filters:{subject:sheetFilterSubject,grade:sheetFilterGrade,unit:sheetFilterUnit}};
 store.worksheets.push(session);if(store.worksheets.length>150)store.worksheets=store.worksheets.slice(-150);activeSheetId=session.id;sheetAnswer=-1;save();page='worksheet';render();notify(`已建立 ${selected.length} 題任務卷，開始挑戰！`);
}
function activeWorksheet(){return store.worksheets.find(s=>s.id===activeSheetId)||null;}
function nextSheetQuestion(sheet){return sheet.questionIds.find(qid=>!Object.prototype.hasOwnProperty.call(sheet.answers,qid))||null;}
function submitSheetAnswer(){const sheet=activeWorksheet();const child=byChild(selectedChild);if(!sheet||sheet.childId!==child?.id||sheetAnswer<0)return;
 const qid=nextSheetQuestion(sheet);const q=visibleQuestions(child).find(x=>x.id===qid);if(!q)return;
 const correct=sheetAnswer===q.correct;
 sheet.answers[qid]={choice:sheetAnswer,correct,at:nowISO()};
 store.practiceAttempts.push({id:id(),childId:child.id,questionId:qid,subject:q.subject,grade:q.grade,unit:q.unit,correct,source:'worksheet',worksheetId:sheet.id,at:nowISO()});
 if(!nextSheetQuestion(sheet))sheet.completedAt=nowISO();
 save();sheetAnswer=-1;render();soundEffect(correct?'win':'try');notify(correct?'答對了！已記錄到本次任務卷':'已記錄這題，可以繼續下一題');
}
function worksheetPage(){const child=byChild(selectedChild)||store.children[0];if(!child)return '<div class="empty">請先建立孩子資料。</div>';selectedChild=child.id;
 let sheet=activeWorksheet();if(sheet?.childId!==child.id){activeSheetId='';sheet=null;}
 const candidates=filteredSheetQuestions(child),units=[...new Set(visibleQuestions(child).filter(q=>(sheetFilterSubject==='all'||q.subject===sheetFilterSubject)&&(sheetFilterGrade==='all'||q.grade===sheetFilterGrade)).map(q=>q.unit))];
 const completed=store.worksheets.filter(s=>s.childId===child.id&&s.completedAt).slice(-8).reverse();const unfinished=store.worksheets.filter(s=>s.childId===child.id&&!s.completedAt).slice(-1)[0];
 const common=`<div class="sheet-filters"><label>學科<select class="field" data-sheet-subject><option value="all">全部</option>${S.map(([sid,name])=>`<option value="${sid}" ${sheetFilterSubject===sid?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label><label>年級<select class="field" data-sheet-grade><option value="all">全部開放年級</option>${G.map(([gid,name])=>`<option value="${gid}" ${sheetFilterGrade===gid?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label><label>單元<select class="field" data-sheet-unit><option value="all">全部單元</option>${units.map(unit=>`<option value="${escapeHTML(unit)}" ${sheetFilterUnit===unit?'selected':''}>${escapeHTML(unit)}</option>`).join('')}</select></label><label>題數<select class="field" data-sheet-count>${[3,5,10,15].map(n=>`<option value="${n}" ${sheetCount===n?'selected':''}>最多 ${n} 題</option>`).join('')}</select></label></div>`;
 let content='';
 if(sheet){const done=sheet.questionIds.filter(q=>Object.prototype.hasOwnProperty.call(sheet.answers,q)).length;const total=sheet.questionIds.length;const qid=nextSheetQuestion(sheet);const q=visibleQuestions(child).find(x=>x.id===qid);
 const percent=Math.round(done/total*100);
 if(q){content=`<section class="card sheet-current"><div class="sheet-step"><span>🧭 任務進行中</span><strong>${done+1} / ${total} 題</strong></div><div class="sheet-meter"><i style="width:${percent}%"></i></div><div class="pill yellow">${subjIcon(q.subject)} ${escapeHTML(gradeShort(q.grade))} · ${escapeHTML(q.unit)}</div><h2 class="sheet-question">${annotateText(q.prompt,q.grade)}</h2><div class="practice-answers">${q.options.map((o,i)=>`<button class="practice-option ${sheetAnswer===i?'selected':''}" data-action="sheet-choice" data-option="${i}"><span>${'ABC'[i]}</span>${annotateText(o,q.grade)}</button>`).join('')}</div><div class="toolbar"><button class="game-cta" data-action="sheet-submit" ${sheetAnswer<0?'disabled':''}>送出本題答案 →</button></div><p class="muted small">可依自己的步調作答，不會扣除星星。每題送出後會記錄在學習報告。</p></section>`;}
 else{const correct=Object.values(sheet.answers).filter(a=>a.correct).length;content=`<section class="card sheet-finish"><div class="sheet-trophy">🏆</div><h2>任務完成！</h2><p>你完成了 ${total} 道練習，其中 ${correct} 題答對，答錯的題目已收進錯題複習。</p><div class="sheet-meter"><i style="width:100%"></i></div><div class="toolbar"><button class="button" data-action="sheet-new">再組一份任務卷</button><button class="button secondary" data-action="nav" data-page="report">查看學習報告</button><button class="button ghost" data-action="nav" data-page="practice">錯題複習</button></div></section>`;}
 }else{content=`<section class="card sheet-start"><h2>🎯 設定今天的任務</h2><p>依孩子已開放的科目與年級，從練習題庫隨機選出不同題目。無須計時，也不影響冒險地圖進度。</p>${common}<div class="sheet-available">目前有 <strong>${candidates.length}</strong> 題符合條件；實際出卷會取可用題數上限。</div><div class="toolbar"><button class="game-cta" data-action="sheet-start" ${candidates.length?'':'disabled'}>✨ 開始本次任務卷</button>${unfinished?`<button class="button secondary" data-action="sheet-resume" data-id="${escapeHTML(unfinished.id)}">🔁 接續未完成任務卷</button>`:''}</div></section>`;}
 return `<div class="stack study-page"><section class="study-hero sheet-hero"><div><span class="study-kicker">🌟 一次一題的冒險練習</span><h2>今日任務卷</h2><p>自選科目、年級與單元，從孩子可使用的題庫隨機組卷。</p></div><div class="study-hero-art">📜 🧩</div></section><section class="card"><div class="section-head"><h2>👧 選擇冒險家</h2><span class="pill yellow">${escapeHTML(child.avatar+' '+child.name)}</span></div><select class="field" data-study-child aria-label="選擇練習孩子">${familyChildOptions(child.id)}</select></section>${content}${sheet?`<div class="toolbar"><button class="button ghost" data-action="sheet-abandon">結束這份任務卷，改選單元</button></div>`:''}<section class="card"><h2>📚 最近完成的任務卷</h2><div class="sheet-history">${completed.length?completed.map(item=>`<div class="sheet-history-item"><div><strong>${escapeHTML(fmtDate(item.completedAt))}</strong><p class="mini">${item.questionIds.length} 題 · ${Object.values(item.answers).filter(a=>a.correct).length} 題正確</p></div><span>✅ 已完成</span></div>`).join(''):'<p class="muted small">尚未完成任務卷，可以從第一份開始。</p>'}</div></section><div class="notice info">任務卷目前使用已開放的補充練習題和家長題庫，不會更動原有 72 關地圖。進度保存於本機瀏覽器，可透過 JSON 備份匯出。</div></div>`;
}
function sheetProgressFor(child){const list=store.worksheets.filter(s=>s.childId===child.id);return {total:list.length,finished:list.filter(s=>s.completedAt).length};}

// CSV parser supports escaped double quotes, commas, CRLF and newlines in quoted cells.
function parseCSV(raw){let text=String(raw).replace(/^\uFEFF/,'');const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){const ch=text[i];if(quoted){if(ch==='"'&&text[i+1]==='"'){cell+='"';i++;}else if(ch==='"'){quoted=false;}else cell+=ch;}else{if(ch==='"'&&cell.trim()===''){quoted=true;}else if(ch===','){row.push(cell.trim());cell='';}else if(ch==='\n'||ch==='\r'){if(ch==='\r'&&text[i+1]==='\n')i++;row.push(cell.trim());cell='';if(row.some(v=>v.length))rows.push(row);row=[];}else cell+=ch;}}
 if(quoted)throw new Error('CSV 有未閉合的引號');row.push(cell.trim());if(row.some(v=>v.length))rows.push(row);return rows;
}
const CSV_COLUMNS=['subject','grade','unit','prompt','a','b','c','correct','explanation','household'];
function standardizeBatchRows(records){if(!Array.isArray(records))throw new Error('JSON 必須是題目陣列');if(records.length>300)throw new Error('一次最多匯入 300 題');const list=[],errors=[];
 records.forEach((raw,i)=>{if(!raw||typeof raw!=='object'){errors.push(`第 ${i+1} 題格式錯誤`);return;}
 const subject=String(raw.subject||'').trim(),grade=String(raw.grade||'').trim(),unit=String(raw.unit||'').trim(),prompt=String(raw.prompt||'').trim();
 const options=Array.isArray(raw.options)?raw.options.map(x=>String(x??'').trim()):['a','b','c'].map(k=>String(raw[k]??'').trim());
 const answer=String(raw.correct??'').trim().toUpperCase();const correct=({A:0,B:1,C:2,'0':0,'1':1,'2':2})[answer];
 const explanation=String(raw.explanation||'').trim(),householdId=String(raw.household||raw.householdId||byChild(selectedChild)?.householdId||'all').trim();
 const good=S.some(s=>s[0]===subject)&&G.some(g=>g[0]===grade)&&unit.length>=1&&unit.length<=30&&prompt.length>=1&&prompt.length<=150&&options.length===3&&options.every(x=>x.length>0&&x.length<=70)&&new Set(options).size===3&&Number.isInteger(correct)&&explanation.length>=1&&explanation.length<=160&&(householdId==='all'||!!byHouse(householdId));
 if(!good){errors.push(`第 ${i+1} 題：科目、年級、選項、答案、字數或家庭不正確`);return;}
 list.push({id:'custom_'+id(),subject,grade,unit,prompt,options,correct,explanation,householdId,origin:'custom',updatedAt:nowISO()});});
 if(errors.length)throw new Error(errors.slice(0,4).join('；')+(errors.length>4?`（另 ${errors.length-4} 筆錯誤）`:''));
 const signatures=new Set([...store.customQuestions.map(q=>`${q.subject}\u0001${q.grade}\u0001${q.unit}\u0001${q.prompt}`)]);const unique=[];let duplicates=0;
 for(const q of list){const sig=`${q.subject}\u0001${q.grade}\u0001${q.unit}\u0001${q.prompt}`;if(signatures.has(sig)){duplicates++;continue;}signatures.add(sig);unique.push(q);}
 if(store.customQuestions.length+unique.length>300)throw new Error(`超過試用版的 300 道自訂題目上限，目前已有 ${store.customQuestions.length} 題`);
 return {questions:unique,duplicates,rawCount:records.length};
}
async function receiveBatchFile(file){if(!file)return;pendingBatch=null;if(file.size>500*1024){notify('批次題庫檔上限 500 KB');return;}
 try{const content=await file.text();let rows;if(file.name.toLowerCase().endsWith('.json')){rows=JSON.parse(content);}else if(file.name.toLowerCase().endsWith('.csv')){const table=parseCSV(content);const header=table.shift()?.map(x=>x.trim().toLowerCase());if(!header||CSV_COLUMNS.some(n=>!header.includes(n)))throw new Error('CSV 標題欄須包含 '+CSV_COLUMNS.join(', '));rows=table.map(row=>Object.fromEntries(header.map((h,i)=>[h,row[i]??''])));}else throw new Error('檔案格式請使用 .csv 或 .json');
 const parsed=standardizeBatchRows(rows);pendingBatch=parsed;const info=`檢查 ${parsed.rawCount} 題；其中新增 ${parsed.questions.length} 題，略過重複 ${parsed.duplicates} 題。`;
 if(parsed.questions.length===0){notify(info);return;}
 openDialog('確認批次匯入',`<div class="notice info">${escapeHTML(info)}<br>所有欄位已檢查，按下儲存才會加入本機題庫。</div><div class="bank-batch-preview">${parsed.questions.slice(0,5).map(q=>`<div><strong>${subjIcon(q.subject)} ${escapeHTML(gradeShort(q.grade))}｜${escapeHTML(q.unit)}</strong><p>${escapeHTML(q.prompt)}</p></div>`).join('')}${parsed.questions.length>5?`<p class="mini">還有 ${parsed.questions.length-5} 題未顯示</p>`:''}</div>`,()=>{if(!pendingBatch||pendingBatch!==parsed)return false;if(store.customQuestions.length+parsed.questions.length>300){notify('匯入前題庫已變更，請重新選檔');return false;}mutate(()=>store.customQuestions.push(...parsed.questions));pendingBatch=null;notify(`新增 ${parsed.questions.length} 道題目`);});
 }catch(e){notify('匯入未執行：'+String(e.message||e).slice(0,160));}finally{document.getElementById('batch-import-file').value='';}
}
function exportBatchTemplate(){const text='\uFEFF'+CSV_COLUMNS.join(',')+'\r\n'+['math','g2','加法練習','12 + 8 = ?','18','20','22','B','12 加 8 等於 20。','all'].join(',')+'\r\n';const blob=new Blob([text],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='冒險王國_題庫匯入範本_UTF8.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);notify('已下載 UTF-8 CSV 範本');}
function masterySection(child){const groups=new Map();for(const q of visibleQuestions(child)){const key=`${q.subject}\u0001${q.grade}\u0001${q.unit}`;if(!groups.has(key))groups.set(key,{subject:q.subject,grade:q.grade,unit:q.unit,items:[]});groups.get(key).items.push(q);}
 const info=[...groups.values()].map(g=>{const latest=g.items.map(q=>latestAttemptFor(child.id,q.id,store.practiceAttempts));const tried=latest.filter(Boolean),correct=tried.filter(a=>a.correct).length;return {...g,tried:tried.length,correct,total:g.items.length};}).filter(g=>g.tried>0).sort((a,b)=>a.subject.localeCompare(b.subject)||gradeIndex(a.grade)-gradeIndex(b.grade));
 return `<section class="card"><div class="section-head"><div><h2>🧭 單元學習追蹤</h2><p class="muted small">依題目最近一次作答統計，顯示練習進度；非正式能力測驗</p></div></div>${info.length?`<div class="mastery-grid">${info.map(g=>{const pct=Math.round(g.correct/g.total*100);const explored=Math.round(g.tried/g.total*100);const level=g.tried<g.total?'探索中':g.correct===g.total?'目前已掌握':'持續練習中';return `<div class="mastery-tile"><strong>${subjIcon(g.subject)} ${escapeHTML(gradeShort(g.grade))}｜${escapeHTML(g.unit)}</strong><span class="mastery-status">${level}</span><div class="sheet-meter"><i style="width:${pct}%"></i></div><small>已練習 ${g.tried}/${g.total} 題（${explored}%）；最近答對 ${g.correct}/${g.total} 題</small></div>`;}).join('')}</div>`:'<div class="empty">還沒有單元練習紀錄，完成自由練習或任務卷後，就會看到這裡的進度。</div>'}</section>`;
}

function bankPage(){
 const qs=practiceQuestions().filter(q=>(bankFilterSubject==='all'||q.subject===bankFilterSubject)&&(bankFilterGrade==='all'||q.grade===bankFilterGrade));
 return `<div class="stack study-page"><section class="study-hero"><div><span class="study-kicker">🧰 題庫編輯／家長功能示範</span><h2>題庫管理工作室</h2><p>內建 24 題單元延伸練習，可新增自己的單選題；原本 72 個地圖關卡不受影響。</p></div><div class="study-hero-art" aria-hidden="true">📝 🧩</div></section><div class="notice">🔐 目前尚未有真正的家長帳號驗證。此頁僅供本機原型測試，不要儲存真實個資或敏感資訊。</div><section class="card"><div class="section-head"><div><h2>🗃️ 題庫總覽</h2><p class="muted small">內建 ${24} 題＋自訂 ${store.customQuestions.length} 題，題庫與冒險關卡各自管理。</p></div><div class="toolbar"><button class="button" data-action="question-add">＋ 新增題目</button><button class="button secondary" data-action="batch-template">下載 CSV 範本</button><button class="button secondary" data-action="batch-import">📥 批次匯入 CSV／JSON</button></div></div><div class="study-filters"><label>科目<select class="field" data-bank-subject><option value="all">全部科目</option>${S.map(([id,name])=>`<option value="${id}" ${bankFilterSubject===id?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label><label>年級<select class="field" data-bank-grade><option value="all">全部年級</option>${G.map(([id,name])=>`<option value="${id}" ${bankFilterGrade===id?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></label></div><div class="bank-manager">${qs.map(q=>`<div class="manager-question"><div class="bank-subject">${subjIcon(q.subject)} ${escapeHTML(gradeLabel(q.grade))} · ${escapeHTML(q.unit)} · ${q.origin==='builtin'?'內建示範':'家長自訂'}</div><strong>${escapeHTML(q.prompt)}</strong><small>${q.options.map((o,i)=>`${'ABC'[i]}.${escapeHTML(o)}`).join('　')}　｜正解：${'ABC'[q.correct]}</small>${q.origin!=='builtin'?`<div class="toolbar"><button class="button secondary tiny" data-action="question-edit" data-key="${escapeHTML(q.id)}">編輯</button><button class="button danger tiny" data-action="question-delete" data-key="${escapeHTML(q.id)}">刪除</button></div>`:''}</div>`).join('')||'<div class="empty">目前沒有符合的題目。</div>'}</div></section><section class="card"><details class="study-unit-catalog"><summary>🗺️ 展開冒險地圖單元索引（原有 72 關）</summary><p class="muted small" style="margin:12px 0">原本冒險關卡保留固定編號和互動題型，供查看單元分類；這部分不會因新增補充題而改變。</p><div class="unit-catalog-grid">${S.filter(([sid])=>bankFilterSubject==='all'||sid===bankFilterSubject).flatMap(([subject])=>G.filter(([grade])=>bankFilterGrade==='all'||grade===bankFilterGrade).flatMap(([grade])=>UNIT_THEMES[subject].map((name,i)=>`<div class="unit-catalog-tile"><span>${subjIcon(subject)} ${escapeHTML(gradeShort(grade))}</span><strong>${i+1}. ${escapeHTML(name)}</strong><small>${escapeHTML(['暖身','挑戰','Boss'][i])}關 · ${subject}_${grade}_${String(i+1).padStart(2,'0')}</small></div>`))).join('')}</div></details></section><div class="notice info">單選題供家長補充練習。幼兒園仍以生活經驗與探索遊戲為主；這些題目不是官方規定的每年級必達程度。</div></div>`;
}
function openQuestionEditor(q){
 const newQ=!q;
 const html=selector('科目','subject',S.map(s=>[s[0],s[1]]),q?.subject||'math')+selector('年級','grade',G,q?.grade||'g2')+selector('使用家庭','household',store.households.map(h=>[h.id,h.name]).concat([['all','家族所有家庭（示範分享）']]),q?.householdId||byChild(selectedChild)?.householdId||store.households[0]?.id)+textInput('單元名稱','unit',q?.unit||'自訂練習',30)+textInput('題目','prompt',q?.prompt||'',150)+textInput('選項 A','a',q?.options[0]||'',70)+textInput('選項 B','b',q?.options[1]||'',70)+textInput('選項 C','c',q?.options[2]||'',70)+selector('正確答案','correct',[['0','A'],['1','B'],['2','C']],String(q?.correct??0))+textInput('解題說明','explanation',q?.explanation||'',160);
 openDialog(newQ?'新增自訂題目':'編輯自訂題目',html,fd=>{
  const subject=String(fd.get('subject')),grade=String(fd.get('grade')),householdId=String(fd.get('household')),unit=String(fd.get('unit')||'').trim(),prompt=String(fd.get('prompt')||'').trim(),options=['a','b','c'].map(k=>String(fd.get(k)||'').trim()),correct=Number(fd.get('correct')),explanation=String(fd.get('explanation')||'').trim();
  if(!S.some(s=>s[0]===subject)||!G.some(g=>g[0]===grade)||!(householdId==='all'||!!byHouse(householdId))||!unit||!prompt||options.some(x=>!x)||new Set(options).size<3||![0,1,2].includes(correct)||!explanation){notify('請填寫完整內容，三個選項也不能重複');return false;}
  if(newQ&&store.customQuestions.length>=300){notify('試用版自訂題目上限 300 題');return false;}
  const item={id:q?.id||'custom_'+id(),subject,grade,householdId,unit,prompt,options,correct,explanation,origin:'custom',updatedAt:nowISO()};
  mutate(()=>{if(q){const index=store.customQuestions.findIndex(x=>x.id===q.id);if(index>=0)store.customQuestions[index]=item;}else store.customQuestions.push(item);});notify(newQ?'題目新增完成':'題目已更新');
 });
}
function reportPage(){
 const child=byChild(reportChild)||byChild(selectedChild)||store.children[0];if(!child)return '<div class="empty">請先建立孩子資料。</div>';reportChild=child.id;
 const records=[...store.progress.filter(p=>p.childId===child.id).map(p=>({...p,source:'地圖'})),...store.practiceAttempts.filter(p=>p.childId===child.id).map(p=>({...p,source:'練習'}))].sort((a,b)=>new Date(a.at)-new Date(b.at));
 const total=records.length,correct=records.filter(p=>p.correct).length,done=new Set(store.progress.filter(p=>p.childId===child.id&&p.correct).map(p=>p.questionId)).size;
 const pending=pendingPractice(child).length+missedStages(child).length;
 const percent=n=>n?Math.round(correct/total*100):0;
 const rows=S.map(([sid,name])=>{const rel=records.filter(p=>p.subject===sid),ok=rel.filter(p=>p.correct).length;return {sid,name,total:rel.length,ok,rate:rel.length?Math.round(ok/rel.length*100):null,done:getStages(child,sid).filter(s=>s.completed).length,available:getStages(child,sid).length};});
 const byUnit=[];
 for(const [subject] of S){for(const grade of child.permissions[subject]){for(let n=1;n<=3;n++){const key=`${subject}_${grade}_${String(n).padStart(2,'0')}`,recs=records.filter(r=>r.questionId===key);if(recs.length)byUnit.push({key,subject,grade,title:UNIT_THEMES[subject][n-1],attempts:recs.length,ok:recs.filter(p=>p.correct).length});}}}
 return `<div class="stack study-page"><section class="study-hero"><div><span class="study-kicker">📊 每位孩子自己的學習旅程</span><h2>學習成長報告</h2><p>看見孩子練習的足跡、已完成的冒險關卡，以及值得再探索的單元。</p></div><div class="study-hero-art" aria-hidden="true">📈 🌟</div></section><section class="card"><div class="section-head"><h2>👧 查詢孩子</h2><span class="pill">⭐ ${earnedCount(child.id)*5} 顆星</span></div><select class="field" data-report-child aria-label="選擇報告孩子">${familyChildOptions(child.id)}</select></section><div class="grid4"><div class="stat"><div class="muted small">累積作答</div><strong>${total}</strong><div class="mini">含地圖與補充題庫</div></div><div class="stat"><div class="muted small">總答對率</div><strong>${total?percent(total)+'%':'—'}</strong><div class="mini">${correct} / ${total} 次作答</div></div><div class="stat"><div class="muted small">已通過地圖關卡</div><strong>${done}</strong><div class="mini">同一關重玩不重複計算</div></div><div class="stat"><div class="muted small">待複習項目</div><strong>${pending}</strong><div class="mini">最近一次未答對的題目</div></div></div><section class="card"><h2 class="card-title">📘 各科練習概況</h2><div class="progress-report-grid">${rows.map(r=>`<div class="progress-report"><div class="report-row"><strong>${subjIcon(r.sid)} ${escapeHTML(r.name)}</strong><span>${r.rate===null?'尚無紀錄':r.rate+'% 答對'}</span></div><div class="report-bar"><i style="width:${r.rate??0}%"></i></div><p class="mini">累積 ${r.total} 次作答 · 地圖已通過 ${r.done}/${r.available} 關</p></div>`).join('')}</div></section><section class="card"><h2 class="card-title">🧠 已練習單元表現</h2>${byUnit.length?`<div class="unit-report-grid">${byUnit.map(u=>`<div class="unit-report"><strong>${subjIcon(u.subject)} ${escapeHTML(gradeShort(u.grade))}｜${escapeHTML(u.title)}</strong><span>${u.ok} / ${u.attempts} 次答對</span><div class="report-bar"><i style="width:${Math.round(u.ok/u.attempts*100)}%"></i></div></div>`).join('')}</div>`:'<div class="empty">還沒有單元練習資料，從冒險地圖挑戰第一關開始吧！</div>'}</section>${masterySection(child)}<div class="notice info">此報表是練習紀錄摘要，不代表正式學力評量或能力診斷；答對率包含重試，因此不適合用來比較不同孩子。</div><div class="toolbar"><button class="button" data-action="nav" data-page="practice">前往補給站與錯題複習 →</button></div></div>`;
}

const WORLDS={
 english:{title:'彩虹英文島',emoji:'🌈',scene:'rainbow',story:'彩虹橋失去色彩了！幫小精靈找回英文魔法字母。',quest:'用英文魔法點亮彩虹！',decoration:['☁️','🌈','🦋','🏝️','🐝','🎈']},
 math:{title:'星際數學宇宙',emoji:'🚀',scene:'space',story:'小火箭正在尋找星星能源，解開數學密碼一起飛向新星球！',quest:'解開數字密碼，讓火箭前進！',decoration:['⭐','🪐','🌙','☄️','🛰️','💫']},
 chinese:{title:'國語魔法森林',emoji:'🌳',scene:'forest',story:'魔法森林的故事書缺了好多字，收集注音與詞語讓故事重新發光。',quest:'找回故事書的神奇文字！',decoration:['🍄','🌲','🦉','🌼','📖','✨']}
};
const STAGE_ICONS=['🧩','⚡','👑'];

const STAGE_META={warmup:{label:'暖身關',icon:'🌟',seconds:45},challenge:{label:'挑戰關',icon:'⚡',seconds:30},boss:{label:'Boss 關',icon:'👑',seconds:25}};
const nowISO=()=>new Date().toISOString();
const id=()=>globalThis.crypto?.randomUUID?.()||('id'+Date.now().toString(36)+Math.random().toString(36).slice(2,8));
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const gradeLabel=v=>G.find(x=>x[0]===v)?.[1]||'未設定';
const subjName=v=>S.find(x=>x[0]===v)?.[1]||v;
const subjIcon=v=>S.find(x=>x[0]===v)?.[2]||'🎯';
const fmtDate=d=>d?new Intl.DateTimeFormat('zh-TW',{dateStyle:'short',timeStyle:'short'}).format(new Date(d)):'—';
const gradeIndex=v=>G.findIndex(x=>x[0]===v);
const gradeShort=v=>gradeLabel(v).replace('幼兒園','幼').replace('國小','小');
function seed(){return {schemaVersion:1,clan:{name:'快樂學習家族',createdAt:nowISO()},households:[{id:'h1',name:'我們家',adults:[{id:'a1',name:'爸爸',role:'family_admin'}]},{id:'h2',name:'妹妹的家庭',adults:[{id:'a2',name:'妹妹',role:'household_admin'}]}],children:[{id:'c1',householdId:'h1',name:'小狐狸',grade:'k5',avatar:'🦊',permissions:{english:['k4','k5'],math:['k4','k5'],chinese:['k4','k5']},dailyGoal:5},{id:'c2',householdId:'h1',name:'小熊貓',grade:'g2',avatar:'🐼',permissions:{english:['g1','g2'],math:['g1','g2','g3'],chinese:['g1','g2']},dailyGoal:10},{id:'c3',householdId:'h2',name:'小星星',grade:'g3',avatar:'🐰',permissions:{english:['g2','g3'],math:['g2','g3'],chinese:['g2','g3']},dailyGoal:10}],progress:[],treasures:[],customQuestions:[],practiceAttempts:[],settings:{timerEnabled:false,soundEnabled:false,speechRate:0.8,zhuyinEnabled:true},bossRecords:[],duels:[],worksheets:[],updatedAt:nowISO()};}
function valid(d){return !!(d&&d.schemaVersion===1&&d.clan&&typeof d.clan.name==='string'&&Array.isArray(d.households)&&Array.isArray(d.children)&&Array.isArray(d.progress)&&d.households.length<1000&&d.children.length<10000&&d.households.every(h=>h&&typeof h.id==='string'&&typeof h.name==='string'&&Array.isArray(h.adults))&&d.children.every(c=>c&&typeof c.id==='string'&&typeof c.householdId==='string'&&typeof c.name==='string'&&G.some(g=>g[0]===c.grade)&&c.permissions&&S.every(s=>Array.isArray(c.permissions[s[0]])&&c.permissions[s[0]].every(g=>G.some(gg=>gg[0]===g)))));}
let store,canSave=true;
try{const raw=localStorage.getItem(KEY);const parsed=raw?JSON.parse(raw):null;store=valid(parsed)?parsed:seed();if(!raw)localStorage.setItem(KEY,JSON.stringify(store));}catch(e){store=seed();canSave=false;}

let page='home',selectedChild=store.children[0]?.id||null,selectedSubject='math',selectedLevelKey='',answer=-1,answerResult=null,previewHousehold='all',treasureOverlay=false;
let quizDeadline=0,timerHandle=null,quizStartedAt=0,audioCtx=null,timedBossActive=false,timedBossEnd=0,bossRunCompleted=false;
let duelHome=null,duelSubject='math',duelGrade='g2',duelPlayers=['c2','c3'],duelRun=null,duelTimer=null;
function normalizeStore(){
 store.treasures=Array.isArray(store.treasures)?store.treasures:[];
 store.settings=store.settings&&typeof store.settings==='object'?store.settings:{timerEnabled:false,soundEnabled:false};
 store.settings.timerEnabled=store.settings.timerEnabled===true;store.settings.soundEnabled=store.settings.soundEnabled===true;store.settings.speechRate=[0.6,0.8,1,1.2].includes(Number(store.settings.speechRate))?Number(store.settings.speechRate):0.8;store.settings.zhuyinEnabled=store.settings.zhuyinEnabled!==false;store.bossRecords=Array.isArray(store.bossRecords)?store.bossRecords:[];store.duels=Array.isArray(store.duels)?store.duels:[];
 store.customQuestions=Array.isArray(store.customQuestions)?store.customQuestions:[];
 store.worksheets=Array.isArray(store.worksheets)?store.worksheets:[];
 store.practiceAttempts=Array.isArray(store.practiceAttempts)?store.practiceAttempts:[];
 let changed=false;for(const entry of store.progress){const old=/^(k4|k5|g[1-6])_(english|math|chinese)_01$/.exec(entry.questionId||'');if(old){entry.questionId=`${old[2]}_${old[1]}_01`;changed=true;}}
 if(changed)save();
}
normalizeStore();
const el=document.getElementById('app');const dlg=document.getElementById('editor');let toastTimer;

function notify(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2800);}
function save(){store.updatedAt=nowISO();try{localStorage.setItem(KEY,JSON.stringify(store));canSave=true;return true}catch(e){canSave=false;notify('本機儲存失敗，請立即匯出備份');return false}}
function mutate(fn){fn();save();render();}
const byHouse=id=>store.households.find(h=>h.id===id);
const byChild=id=>store.children.find(c=>c.id===id);
const earnedCount=id=>store.progress.filter(p=>p.childId===id&&p.correct&&p.firstReward).length;
const attemptsCount=id=>store.progress.filter(p=>p.childId===id).length;
const todayCount=id=>new Set(store.progress.filter(p=>p.childId===id&&new Date(p.at).toDateString()===new Date().toDateString()&&p.correct).map(p=>p.questionId)).size;
function streakCount(id){const rows=store.progress.filter(p=>p.childId===id).slice().reverse();let n=0;for(const row of rows){if(row.correct)n++;else break;}return n;}


// P1.8 pass-and-play family adventure. Runs only on the shared device; no public matches.
function stopDuelTimer(){if(duelTimer){clearInterval(duelTimer);duelTimer=null;}}
function duelSharedGrades(){const [a,b]=duelPlayers.map(byChild);if(!a||!b||a.id===b.id)return [];return availableGrades(a,duelSubject).filter(g=>availableGrades(b,duelSubject).includes(g));}
function duelTimeLimit(){return gradeIndex(duelGrade)<=3?120:90;}
function duelPrompt(){const index=duelRun?.questionIndex||0;return index===0?Q[duelGrade][duelSubject]:MORE[duelGrade][duelSubject][index-1];}
function duelRemaining(){return duelRun?.phase==='playing'?Math.max(0,Math.ceil((duelRun.deadline-Date.now())/1000)):0;}
function startDuelRound(){if(!duelRun||duelRun.phase!=='ready')return;duelRun.phase='playing';duelRun.questionIndex=0;duelRun.score=0;duelRun.choices=[];duelRun.roundStartedAt=Date.now();duelRun.deadline=Date.now()+duelTimeLimit()*1000;stopDuelTimer();duelTimer=setInterval(()=>{if(page!=='battle'||!duelRun||duelRun.phase!=='playing'){stopDuelTimer();return;}const left=duelRemaining(),label=document.querySelector('[data-role="duel-clock"]');if(label)label.textContent=`⏱️ ${left} 秒`;if(left===0)finishDuelRound(true);},250);render();}
function finishDuelRound(timeout=false){if(!duelRun||duelRun.phase!=='playing')return;stopDuelTimer();const totalMs=Math.min(duelTimeLimit()*1000,Date.now()-duelRun.roundStartedAt);duelRun.results.push({childId:duelRun.players[duelRun.turn],score:duelRun.score,elapsedMs:totalMs,answers:duelRun.choices,timeout});duelRun.turn+=1;
 if(duelRun.turn<2){duelRun.phase='ready';duelRun.score=0;duelRun.questionIndex=0;duelRun.choices=[];}else{duelRun.phase='done';store.duels.push({id:id(),at:nowISO(),subject:duelRun.subject,grade:duelRun.grade,householdIds:duelRun.players.map(p=>byChild(p)?.householdId),players:duelRun.players.slice(),results:duelRun.results.map(x=>({...x}))});if(store.duels.length>500)store.duels=store.duels.slice(-500);save();}render();}
function answerDuel(index){if(!duelRun||duelRun.phase!=='playing')return;if(duelRemaining()<=0){finishDuelRound(true);return;}const q=duelPrompt();const correct=index===q[2];duelRun.score+=Number(correct);duelRun.choices.push({index,correct});duelRun.questionIndex+=1;soundEffect(correct?'win':'try');if(duelRun.questionIndex>=3)finishDuelRound();else{render();notify(correct?'答對了，繼續下一關！':'繼續挑戰下一題，沒關係！');}}
function beginDuel(){const [a,b]=duelPlayers.map(byChild);if(!a||!b||a.id===b.id){notify('請選兩位不同的孩子');return;}if(!duelSharedGrades().includes(duelGrade)){notify('請選兩位孩子都已開放的共同年級');return;}duelRun={players:[a.id,b.id],subject:duelSubject,grade:duelGrade,phase:'ready',turn:0,score:0,questionIndex:0,choices:[],results:[]};render();}
function getDuelRankText(r1,r2){if(r1.score===r2.score){if(Math.abs(r1.elapsedMs-r2.elapsedMs)<500)return '兩位冒險家共同完成！';return '同分完成！可以一起慶祝學習成果。';}return '兩位冒險家都完成挑戰！看看各自答對的題數。';}
function battlePage(){const all=store.children;if(all.length<2)return `<section class="card"><h2>🎮 雙人輪流挑戰</h2><p>請先在家族管理中建立兩位孩子。</p></section>`;
 const a=byChild(duelPlayers[0])||all[0],b=byChild(duelPlayers[1])||all[1];duelPlayers=[a.id,b.id];const grades=duelSharedGrades();if(!grades.includes(duelGrade))duelGrade=grades[0]||'';
 const records=store.duels.filter(m=>m.players.some(id=>duelPlayers.includes(id))).slice(-5).reverse();
 let body='';
 if(!duelRun){body=`<section class="arena-setup"><h3>🎲 選擇雙人冒險隊伍</h3><div class="arena-config"><label>第一位冒險家<select class="field" data-duel-first>${all.map(c=>`<option value="${escapeHTML(c.id)}" ${c.id===a.id?'selected':''}>${escapeHTML(c.avatar+' '+c.name)}</option>`).join('')}</select></label><label>第二位冒險家<select class="field" data-duel-second>${all.map(c=>`<option value="${escapeHTML(c.id)}" ${c.id===b.id?'selected':''}>${escapeHTML(c.avatar+' '+c.name)}</option>`).join('')}</select></label><label>挑戰學科<select class="field" data-duel-subject>${S.map(([id,label])=>`<option value="${id}" ${id===duelSubject?'selected':''}>${escapeHTML(label)}</option>`).join('')}</select></label><label>共同開放的年級<select class="field" data-duel-grade>${grades.length?grades.map(g=>`<option value="${g}" ${g===duelGrade?'selected':''}>${gradeLabel(g)}</option>`).join(''):'<option value="">沒有共同開放年級</option>'}</select></label></div><p class="small muted">每人依序回答相同 3 題；二年級以下每人上限 120 秒，其餘 90 秒。每人獨立計時，回合間暫停。若沒有共同年級，請先由家長調整開放範圍。</p><button class="game-cta" data-action="duel-begin" ${!grades.length||a.id===b.id?'disabled':''}>⚔️ 建立雙人挑戰</button></section>`;}
 else if(duelRun.phase==='ready'){const kid=byChild(duelRun.players[duelRun.turn]);body=`<section class="arena-ready"><div class="arena-mascot">${escapeHTML(kid?.avatar||'🦊')}</div><h3>第 ${duelRun.turn+1} 位冒險家：${escapeHTML(kid?.name||'小冒險家')}</h3><p>請將裝置交給這位冒險家。準備好後再開始計時，其他人可以在旁邊加油。</p><button class="game-cta" data-action="duel-go">▶ 我準備好了，開始挑戰</button><button class="button ghost" data-action="duel-cancel">結束本次挑戰</button></section>`;}
 else if(duelRun.phase==='playing'){const kid=byChild(duelRun.players[duelRun.turn]),q=duelPrompt();body=`<section class="arena-playing"><div class="arena-progress"><span>${escapeHTML(kid?.avatar||'🌟')} ${escapeHTML(kid?.name||'冒險家')}</span><strong data-role="duel-clock">⏱️ ${duelRemaining()} 秒</strong><span>第 ${duelRun.questionIndex+1} / 3 題</span></div><div class="arena-progress-track"><i style="width:${duelRun.questionIndex/3*100}%"></i></div><h3 class="arena-question">${annotateText(q[0],duelRun.grade)}</h3>${gradeIndex(duelGrade)<=3?'<button class="speak-prompt" data-action="duel-speak">🔊 聽題目</button>':''}<div class="arena-answers">${q[1].map((o,i)=>`<button data-action="duel-answer" data-option="${i}"><span>${'ABC'[i]}</span>${annotateText(o,duelRun.grade)}</button>`).join('')}</div></section>`;}
 else{const [r1,r2]=duelRun.results,b1=byChild(r1.childId),b2=byChild(r2.childId);body=`<section class="arena-end"><div class="arena-mascot">🏅🎉</div><h3>冒險挑戰完成！</h3><p>${getDuelRankText(r1,r2)}</p><div class="arena-scores">${[[r1,b1],[r2,b2]].map(([r,k])=>`<div><span>${escapeHTML(k?.avatar||'🌟')} ${escapeHTML(k?.name||'玩家')}</span><strong>${r.score} / 3 題</strong><small>作答時間 ${readableSeconds(r.elapsedMs)}${r.timeout?'（時間到）':''}</small></div>`).join('')}</div><p class="small muted">這只是本機輪流挑戰的練習成績，不會影響原本星星或關卡進度。</p><button class="game-cta" data-action="duel-again">🔁 再玩一場</button></section>`;}
 return `<div class="stack duel-page"><section class="arena-banner"><div class="arena-big">⚔️</div><div><span>FAMILY ADVENTURE ARENA</span><h2>雙人輪流冒險</h2><p>同一裝置・同年級同科目・三題公平挑戰。鼓勵合作與練習，不設公開排名。</p></div></section><div class="arena-top"><button class="button ghost" data-action="nav" data-page="play">← 返回遊戲首頁</button>${speechRateHTML()}${gradeHelperHTML(duelGrade)}</div>${body}<section class="card"><h3>📖 本機最近對戰紀錄</h3>${records.length?records.map(m=>`<div class="battle-history">${escapeHTML(subjName(m.subject))} · ${gradeShort(m.grade)}　${m.results.map(r=>`${byChild(r.childId)?.name||'孩子'} ${r.score}/3`).join(' · ')} <small>${escapeHTML(fmtDate(m.at))}</small></div>`).join(''):'<p class="muted small">尚無對戰紀錄。</p>'}</section><div class="notice info">這是同裝置輪流挑戰示範，沒有線上配對、聊天、即時網路對戰或公開排行榜；不同家庭孩子的同機試玩目前也尚未有真正的登入隔離。</div></div>`;
}
function pageIntro(){return {home:['我的家族學習中心','家族總覽'],family:['建立與管理各家庭','家族成員'],permission:['各孩子獨立設定開放範圍','學習權限'],play:['地圖式闖關與兒童入口','兒童入口'],achievements:['家族學習徽章與寶箱','成就紀錄'],backup:['資料保存與匯入匯出','備份中心'],battle:['兩位冒險家輪流回答同一組題目','雙人冒險競賽'],practice:['按年級單元自由練習','學習補給站'],bank:['新增與管理家庭題目','題庫工作室'],report:['每位孩子的學習統計','成長報告'],worksheet:['依單元組卷、逐題挑戰','今日任務卷'],quiz:['地圖闖關模式','冒險關卡']}[page]||['家族學習中心','總覽'];}
function header(){const [sub,title]=pageIntro();return `<div class="topline"><div><div class="eyebrow">${escapeHTML(sub)}</div><h1 class="page-title">${escapeHTML(title)}</h1></div><div class="pills"><span class="pill yellow">🧪 本機試用版本</span><span class="pill">📱 手機／平板適用</span></div></div>${canSave?'':`<div class="notice" style="margin-bottom:15px">⚠️ 目前瀏覽器不允許儲存，變更可能在重新開啟後遺失。請使用「備份中心」匯出資料。</div>`}`;}
const nav=[['home','🏠','總覽'],['family','👨‍👩‍👧‍👦','家族與家庭'],['permission','🎛️','學習權限'],['play','🕹️','兒童入口'],['achievements','🏆','成就紀錄'],['practice','📚','練習與複習'],['worksheet','🧭','今日任務卷'],['battle','🎮','雙人對戰'],['report','📈','學習報告'],['bank','📝','題庫管理'],['backup','💾','資料備份']];
function frame(inner){return `<div class="shell ${page==='play'||page==='quiz'?'play-shell':''}"><aside class="sidebar"><div class="brand"><div class="brandicon">🌈</div><div><strong>學習冒險王國</strong><div class="mini">家族共享 · Adventure P1.8</div></div></div><div class="nav" role="navigation" aria-label="主要選單">${nav.map(n=>`<button data-action="nav" data-page="${n[0]}" ${page===n[0]?'aria-current="page"':''}>${n[1]} ${n[2]}</button>`).join('')}</div><div class="side-bottom">🔐 <strong>安全提醒</strong><br>這是功能原型，沒有真正的帳號登入、權限驗證或雲端同步。家族資料只存在目前瀏覽器。</div></aside><main class="content">${header()}${inner}<footer class="footer">家族學習冒險王國 P1.8｜限時 Boss 與雙人冒險版｜免費、本機測試｜正式家族登入將於雲端階段實作</footer></main></div>`;}
function childCard(c,showButtons=true){return `<div class="child-card"><div class="avatar">${escapeHTML(c.avatar)}</div><div class="child-meta"><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(gradeLabel(c.grade))}・${escapeHTML(byHouse(c.householdId)?.name||'未分配家庭')}・⭐ ${earnedCount(c.id)*5}</p></div>${showButtons?`<button class="button secondary tiny" data-action="edit-child" data-id="${escapeHTML(c.id)}">編輯</button>`:''}</div>`;}
function availableGrades(child,subject='all'){if(!child)return [];return G.map(x=>x[0]).filter(g=>subject==='all'?S.some(([sid])=>child.permissions[sid]?.includes(g)):child.permissions[subject]?.includes(g));}
function gradeChoice(child){const all=availableGrades(child);return all.includes(child?.challengeGrade)?child.challengeGrade:(all.includes(child?.grade)?child.grade:(all[0]||''));}
function gradeSelectHTML(child){const current=gradeChoice(child);return `<label class="grade-choice">🎓 選擇挑戰年級<select class="field" data-child-grade aria-label="為此孩子選擇挑戰年級">${availableGrades(child).map(g=>`<option value="${g}" ${current===g?'selected':''}>${escapeHTML(gradeLabel(g))}</option>`).join('')}</select></label>`;}
function speechRateHTML(){const n=store.settings.speechRate;return `<label class="rate-select">🔊 發音速度<select class="field" data-speech-rate aria-label="發音速度">${[[0.6,'慢速 0.6×'],[0.8,'稍慢 0.8×'],[1,'正常 1.0×'],[1.2,'稍快 1.2×']].map(([v,t])=>`<option value="${v}" ${v===n?'selected':''}>${t}</option>`).join('')}</select></label>`;}
function gradeHelperHTML(g){return gradeIndex(g)<=3?`<button class="sound-switch" data-action="zhuyin-toggle" aria-pressed="${store.settings.zhuyinEnabled}">${store.settings.zhuyinEnabled?'ㄅ 注音顯示':'ㄅ 注音隱藏'}</button>`:'';}
function getStages(child,subject){
 if(!child)return [];
 const grades=(child.permissions[subject]||[]).slice().sort((a,b)=>gradeIndex(a)-gradeIndex(b));
 const stages=[];
 for(const grade of grades){
  for(let n=1;n<=3;n++){
   const qid=`${subject}_${grade}_${String(n).padStart(2,'0')}`;
   const prevKey=n>1?stages[stages.length-1].key:null;
   const attempts=store.progress.filter(p=>p.childId===child.id&&p.questionId===qid);
   const completed=attempts.some(p=>p.correct);
   const unlocked=!prevKey||store.progress.some(p=>p.childId===child.id&&p.questionId===prevKey&&p.correct);
   const type=n===3?'boss':n===2?'challenge':'warmup';
   stages.push({key:qid,subject,grade,index:n,title:`第 ${n} 關`,completed,unlocked,attempts:attempts.length,firstReward:attempts.some(p=>p.firstReward),type,timeLimit:gradeIndex(grade)<2?75:STAGE_META[type].seconds});
  }
 }
 return stages;
}
function worldProgress(child,subject){const stages=getStages(child,subject);const done=stages.filter(s=>s.completed).length;const unlocked=stages.filter(s=>s.unlocked).length;const next=stages.find(s=>s.unlocked&&!s.completed)||stages[stages.length-1]||null;return {stages,done,unlocked,next};}
function currentStage(){const child=byChild(selectedChild);const stages=getStages(child,selectedSubject);if(!stages.length)return null;return stages.find(s=>s.key===selectedLevelKey)||stages.find(s=>s.unlocked&&!s.completed)||stages[0];}
function chooseBestStage(child,subject,grade=gradeChoice(child)){const stages=getStages(child,subject).filter(s=>!grade||s.grade===grade);return stages.find(s=>s.unlocked&&!s.completed)?.key||stages.filter(s=>s.unlocked).slice(-1)[0]?.key||stages[0]?.key||'';}
function levelStars(stage){if(!stage)return 0;const rows=store.progress.filter(p=>p.childId===selectedChild&&p.questionId===stage.key);return rows.some(p=>p.correct)?(rows.some(p=>p.quickBonus)?3:2):0;}
function missionStarsText(stage){const stars=levelStars(stage);return '★'.repeat(stars)+'☆'.repeat(3-stars);}
function clearTimer(){if(timerHandle){clearInterval(timerHandle);timerHandle=null;}quizDeadline=0;}
function remainingSeconds(){return !quizDeadline?0:Math.max(0,Math.ceil((quizDeadline-Date.now())/1000));}
function startTimer(seconds){clearTimer();quizStartedAt=Date.now();if(!store.settings.timerEnabled&&!timedBossActive)return;quizDeadline=Date.now()+(timedBossActive?bossLimitSec(currentStage()):seconds)*1000;timerHandle=setInterval(()=>{if(page!=='quiz'){clearTimer();return;}if(answerResult==='correct')return;const left=remainingSeconds();const timerEl=document.querySelector('[data-role="timer"]');if(timerEl)timerEl.textContent=`⏱️ ${left} 秒`;if(left<=0){clearTimer();handleTimeout();}if(left<=5&&timerEl)timerEl.classList.add('urgent');},500);}
function handleTimeout(){timedBossActive=false;const stage=currentStage();const child=byChild(selectedChild);if(!stage||!child||answerResult==='correct'||answerResult==='timeout')return;answerResult='timeout';mutate(()=>store.progress.push({id:id(),childId:child.id,subject:selectedSubject,grade:stage.grade,questionId:stage.key,correct:false,firstReward:false,quickBonus:false,reason:'timeout',at:nowISO()}));notify('時間到！再挑戰一次吧！');}
function openWorld(subject){timedBossActive=false;resetTask();selectedSubject=subject;{const kid=byChild(selectedChild);const chosen=gradeChoice(kid);const use=kid.permissions[subject].includes(chosen)?chosen:kid.permissions[subject][0];kid.challengeGrade=use;selectedLevelKey=chooseBestStage(kid,subject,use);}answer=-1;answerResult=null;treasureOverlay=false;page='quiz';const stage=currentStage();if(stage)startTimer(stage.timeLimit);render();window.scrollTo({top:0,behavior:'instant'});}
function openStage(stageKey){timedBossActive=false;resetTask();const child=byChild(selectedChild);const stage=getStages(child,selectedSubject).find(s=>s.key===stageKey);if(!stage||!stage.unlocked){notify('請先完成前面的關卡！');return;}child.challengeGrade=stage.grade;selectedLevelKey=stageKey;answer=-1;answerResult=null;treasureOverlay=false;startTimer(stage.timeLimit);render();}
function travelToNext(fromKey){
 const map=document.querySelector('.landscape-map');if(!map)return;
 const from=Array.from(map.querySelectorAll('.island-node')).find(n=>n.querySelector('button')?.dataset.key===fromKey);
 const to=map.querySelector('.island-node.selected');if(!from||!to)return;
 const kid=byChild(selectedChild);
 const actor=map.querySelector('.walking-hero');if(actor)actor.style.visibility='hidden';
 const runner=document.createElement('div');runner.className='journey-runner';runner.textContent=kid?.avatar||'🌟';
 runner.style.left=from.style.left;runner.style.top=from.style.top;map.appendChild(runner);
 const dy=parseFloat(to.style.top)-parseFloat(from.style.top);
 const dx=(parseFloat(to.style.left)-parseFloat(from.style.left))/100*map.getBoundingClientRect().width;
 const done=()=>{runner.remove();if(actor)actor.style.visibility='visible';const tip=document.createElement('div');tip.className='stage-arrival14';tip.textContent='✨ 新的冒險開始！';map.appendChild(tip);setTimeout(()=>tip.remove(),1300);};
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){done();return;}
 if(runner.animate){const anim=runner.animate([{transform:'translate(-50%,-80%) scale(1)'},{transform:`translate(calc(-50% + ${dx/2}px),${dy/2-95}px) scale(1.22)`,offset:.5},{transform:`translate(calc(-50% + ${dx}px),${dy-80}px) scale(1)`}],{duration:1000,easing:'ease-in-out'});anim.onfinish=done;anim.oncancel=done;}else done();
}
function nextStageKey(){const child=byChild(selectedChild);const stages=getStages(child,selectedSubject).filter(s=>s.grade===gradeChoice(child));const i=stages.findIndex(s=>s.key===selectedLevelKey);return i>=0&&i<stages.length-1&&stages[i+1].unlocked?stages[i+1].key:'';}

function home(){return `<div class="stack"><section class="card hero"><div><span class="pill">✨ 家族共學計畫</span><h2>${escapeHTML(store.clan.name)}，一起發現學習的樂趣！</h2><p>從幼兒園中班到國小六年級，英文、數學與國語各自自由分級。現在已升級成地圖闖關模式，孩子可以沿著關卡一路前進。</p><div class="toolbar" style="margin-top:19px"><button class="button" style="background:white;color:#175d79" data-action="nav" data-page="play">開始試玩 →</button><button class="button" style="background:rgba(255,255,255,.16);color:white" data-action="nav" data-page="family">管理家庭</button></div></div><div class="heroart" aria-hidden="true">🗺️</div></section><div class="grid4"><div class="stat"><div class="muted small">家庭數量</div><strong>${store.households.length}</strong><div class="mini">家庭可自行命名</div></div><div class="stat"><div class="muted small">孩子人數</div><strong>${store.children.length}</strong><div class="mini">各自獨立成長紀錄</div></div><div class="stat"><div class="muted small">已完成關卡</div><strong>${store.progress.filter(p=>p.correct).length}</strong><div class="mini">正確作答的次數</div></div><div class="stat"><div class="muted small">已獲得星星</div><strong>${store.children.reduce((a,c)=>a+earnedCount(c.id)*5,0)}</strong><div class="mini">首次答對與快速通關可累積</div></div></div><div class="grid2"><section class="card"><h2 class="card-title">👨‍👩‍👧‍👦 家族家庭</h2><div class="stack">${store.households.length?store.households.map(h=>`<div class="child-card"><div class="house-icon">🏡</div><div class="child-meta"><h3>${escapeHTML(h.name)}</h3><p>成人 ${h.adults.length} 人・孩子 ${store.children.filter(c=>c.householdId===h.id).length} 人</p></div></div>`).join(''):'<div class="empty">尚未建立家庭</div>'}</div><button class="button secondary full" style="margin-top:14px" data-action="nav" data-page="family">新增或管理家庭</button></section><section class="card"><h2 class="card-title">🎒 小冒險家</h2><div class="stack">${store.children.length?store.children.slice(0,5).map(c=>childCard(c,false)).join(''):'<div class="empty">尚未新增孩子</div>'}</div><button class="button secondary full" style="margin-top:14px" data-action="nav" data-page="permission">調整每位孩子的科目年級</button></section></div><div class="toolbar"><button class="button secondary" data-action="nav" data-page="worksheet">🧭 自動組卷</button><button class="button secondary" data-action="nav" data-page="practice">📚 自由練習與錯題複習</button><button class="button secondary" data-action="nav" data-page="report">📈 學習成長報告</button></div>
 <div class="notice info">🧭 <strong>P1.6 冒險版測試順序：</strong>新增家庭 → 新增孩子 → 個別勾選科目與年級 → 進入兒童入口 → 選擇世界 → 依地圖節點闖關 → 匯出 JSON 備份。</div></div>`;}

function family(){return `<div class="stack"><div class="notice info">此畫面是家族總管理者的操作示範。正式版會由登入身分決定哪些家庭可編輯；這裡的權限標籤不是實際的登入驗證。</div><section class="card"><div class="section-head"><div><h2>🌳 ${escapeHTML(store.clan.name)}</h2><p class="muted small">家族可包含多個家庭，每個家庭自行建立成人及孩子</p></div><button class="button secondary" data-action="rename-clan">修改家族名稱</button></div><div class="toolbar"><button class="button" data-action="add-house">＋ 新增家庭</button><button class="button ghost" data-action="add-child">＋ 新增孩子</button></div></section><div class="grid2">${store.households.map(h=>`<section class="card family-card"><header><div class="house-icon">🏠</div><div class="child-meta"><h3>${escapeHTML(h.name)}</h3><p>${h.adults.length} 位成人・${store.children.filter(c=>c.householdId===h.id).length} 位孩子</p></div><button class="button ghost tiny" data-action="edit-house" data-id="${h.id}">編輯家庭</button></header><div><div class="mini" style="margin-bottom:8px">成人成員</div><div class="people">${h.adults.length?h.adults.map(a=>`<button class="person-chip adult" data-action="edit-adult" data-house="${h.id}" data-id="${a.id}">${escapeHTML(a.name)}<small>・${a.role==='family_admin'?'家族管理者':'家庭成人'}</small></button>`).join(''):'<span class="person-chip">尚未新增</span>'}</div><div class="toolbar" style="margin-top:10px"><button class="button secondary tiny" data-action="add-adult" data-id="${h.id}">＋ 新增成人</button><button class="button ghost tiny" data-action="add-child" data-house="${h.id}">＋ 新增孩子</button></div></div><div><div class="mini" style="margin-bottom:8px">孩子</div><div class="people">${store.children.filter(c=>c.householdId===h.id).length?store.children.filter(c=>c.householdId===h.id).map(c=>`<button class="person-chip kid" data-action="edit-child" data-id="${c.id}">${escapeHTML(c.avatar)} ${escapeHTML(c.name)} <small>${escapeHTML(gradeShort(c.grade))}</small></button>`).join(''):'<span class="person-chip">尚未新增孩子</span>'}</div></div></section>`).join('')}</div></div>`;}

function permission(){const c=byChild(selectedChild)||store.children[0];if(!c)return '<div class="empty">請先建立孩子資料。</div>';selectedChild=c.id;return `<div class="stack"><div class="notice info">每位孩子的三科權限可分開設定，支援單選或複選。正式版會改由家長登入權限控制；目前為本機試用。</div><div class="perm-layout"><section class="card"><h2 class="card-title">👧 選擇孩子</h2><div class="kid-list">${store.children.map(k=>`<button class="${k.id===c.id?'selected':''}" data-action="select-child" data-id="${k.id}"><span style="font-size:28px">${escapeHTML(k.avatar)}</span><span><strong>${escapeHTML(k.name)}</strong><div class="mini">${escapeHTML(gradeLabel(k.grade))}</div></span></button>`).join('')}</div></section><section class="card"><div class="section-head"><div><h2>🎛️ ${escapeHTML(c.name)} 的學習權限</h2><p class="muted small">目前就讀：${escapeHTML(gradeLabel(c.grade))}｜每回合目標 ${c.dailyGoal} 題</p></div><button class="button secondary" data-action="set-default" data-id="${c.id}">依年級自動帶入</button></div>${S.map(([sid,name,emoji,cls])=>`<div class="subject-row"><h3><span class="color-dot ${cls}"></span>${emoji} ${escapeHTML(name)}</h3><div class="grade-checks">${G.map(([gid,glabel])=>`<label class="check"><input type="checkbox" data-permission="1" data-child="${c.id}" data-subject="${sid}" data-grade="${gid}" ${c.permissions[sid].includes(gid)?'checked':''}> <span>${escapeHTML(glabel)}</span></label>`).join('')}</div></div>`).join('')}<div class="divider"></div><div class="form-row"><label for="daily-goal">每日建議題數</label><select class="field" id="daily-goal" data-daily="${c.id}">${[5,10,15,20].map(n=>`<option value="${n}" ${n===c.dailyGoal?'selected':''}>${n} 題</option>`).join('')}</select></div></section></div></div>`;}


// World illustration is inline vector artwork so the standalone HTML works offline.
function worldArtwork(subject,variant='card'){
 const cid=`art-${subject}-${variant}`;
 if(subject==='english')return `<svg class="world-art art-${variant}" viewBox="0 0 900 370" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><defs><linearGradient id="${cid}-sky" x2="0" y2="1"><stop stop-color="#59c6f3"/><stop offset="1" stop-color="#c3f8eb"/></linearGradient><linearGradient id="${cid}-hill" x2="0" y2="1"><stop stop-color="#8ce6a2"/><stop offset="1" stop-color="#4bba83"/></linearGradient></defs><rect width="900" height="370" fill="url(#${cid}-sky)"/><circle cx="753" cy="76" r="45" fill="#fff4ac" opacity=".9"/><path d="M80 255 Q290 -75 511 255" fill="none" stroke="#fff" opacity=".85" stroke-width="62"/><path d="M80 255 Q290 -75 511 255" fill="none" stroke="#f879ad" stroke-width="48"/><path d="M80 255 Q290 -75 511 255" fill="none" stroke="#ffc46e" stroke-width="34"/><path d="M80 255 Q290 -75 511 255" fill="none" stroke="#fff4a1" stroke-width="20"/><path d="M80 255 Q290 -75 511 255" fill="none" stroke="#77d5df" stroke-width="7"/><g fill="#fff" opacity=".9"><ellipse cx="118" cy="102" rx="81" ry="22"/><ellipse cx="87" cy="90" rx="39" ry="25"/><ellipse cx="617" cy="80" rx="91" ry="23"/><ellipse cx="592" cy="62" rx="37" ry="32"/></g><path d="M0 295Q160 220 319 276T621 267T900 259V370H0Z" fill="#a8e8b1"/><path d="M0 333Q180 247 402 323T900 289V370H0Z" fill="url(#${cid}-hill)"/><g fill="#ffed97"><circle cx="645" cy="283" r="12"/><circle cx="684" cy="304" r="9"/><circle cx="716" cy="276" r="9"/></g><g transform="translate(770 205)"><path d="M0 35Q30-30 60 35V90H0Z" fill="#fff0c7"/><path d="M-9 35L30-8L69 35Z" fill="#e47ea8"/><rect x="22" y="52" width="16" height="38" rx="8" fill="#bd83a3"/></g></svg>`;
 if(subject==='math')return `<svg class="world-art art-${variant}" viewBox="0 0 900 370" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><defs><linearGradient id="${cid}-sky" x2="0" y2="1"><stop stop-color="#182958"/><stop offset="1" stop-color="#6764bb"/></linearGradient><radialGradient id="${cid}-planet"><stop stop-color="#ffd4a4"/><stop offset="1" stop-color="#f185ac"/></radialGradient></defs><rect width="900" height="370" fill="url(#${cid}-sky)"/><g fill="#fff5ce"><circle cx="85" cy="49" r="5"/><circle cx="183" cy="92" r="3"/><circle cx="380" cy="35" r="5"/><circle cx="570" cy="80" r="4"/><circle cx="777" cy="42" r="6"/><circle cx="830" cy="153" r="4"/><circle cx="460" cy="133" r="3"/><circle cx="277" cy="160" r="4"/><circle cx="674" cy="206" r="4"/><circle cx="101" cy="205" r="4"/></g><circle cx="710" cy="122" r="81" fill="url(#${cid}-planet)"/><ellipse cx="710" cy="122" rx="132" ry="34" transform="rotate(-18 710 122)" fill="none" stroke="#ffcf84" stroke-width="16" opacity=".85"/><circle cx="207" cy="178" r="55" fill="#8ba4ec"/><ellipse cx="196" cy="165" rx="30" ry="15" fill="#c5d6ff" opacity=".4"/><path d="M0 325Q120 245 260 311T575 306T900 275V370H0Z" fill="#333f91"/><path d="M0 355Q210 278 437 340T900 316V370H0Z" fill="#4d5bac"/><g transform="translate(437 183) rotate(25)"><path d="M0 80Q-32 10 0-45Q32 10 0 80Z" fill="#fff"/><path d="M0-45Q-30-4 0-12Q30-4 0-45Z" fill="#e8689e"/><circle cy="8" r="12" fill="#83d6f0"/><path d="M-9 78L0 117L9 78Z" fill="#ffcf76"/></g></svg>`;
 return `<svg class="world-art art-${variant}" viewBox="0 0 900 370" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><defs><linearGradient id="${cid}-sky" x2="0" y2="1"><stop stop-color="#7dd8c1"/><stop offset="1" stop-color="#e5ffca"/></linearGradient><linearGradient id="${cid}-tree" x2="0" y2="1"><stop stop-color="#58b884"/><stop offset="1" stop-color="#197c68"/></linearGradient></defs><rect width="900" height="370" fill="url(#${cid}-sky)"/><circle cx="715" cy="84" r="50" fill="#fff0ae" opacity=".92"/><g fill="#a5e7ae"><path d="M0 265L120 130L242 265Z"/><path d="M180 275L358 90L536 275Z"/><path d="M530 268L690 138L855 268Z"/></g><path d="M0 309Q160 255 355 315T900 276V370H0Z" fill="#69bd82"/><path d="M0 351Q235 284 415 334T900 306V370H0Z" fill="#419c70"/><g><rect x="116" y="134" width="30" height="200" rx="12" fill="#96704e"/><circle cx="132" cy="128" r="81" fill="url(#${cid}-tree)"/><circle cx="82" cy="177" r="53" fill="#4ea477"/><rect x="774" y="97" width="31" height="250" rx="12" fill="#96704e"/><circle cx="788" cy="101" r="88" fill="url(#${cid}-tree)"/><circle cx="835" cy="156" r="48" fill="#379b73"/></g><g transform="translate(456 207)"><path d="M-75 67Q0-5 75 67L75 141H-75Z" fill="#fff4d3"/><path d="M-90 66L0-14L90 66Z" fill="#e98c8c"/><rect x="-13" y="88" width="26" height="53" rx="12" fill="#9e81bd"/><circle cx="-40" cy="85" r="12" fill="#7ad5ee"/><circle cx="40" cy="85" r="12" fill="#7ad5ee"/></g><g fill="#ffe899"><circle cx="290" cy="306" r="10"/><circle cx="326" cy="321" r="8"/><circle cx="619" cy="309" r="9"/></g></svg>`;
}
function play(){
 const c=byChild(selectedChild)||store.children[0];if(!c)return '<div class="empty">請先新增兒童冒險家。</div>';selectedChild=c.id;
 const sound=store.settings.soundEnabled,totalBadges=store.treasures.filter(t=>t.childId===c.id).length;
 const completedToday=todayCount(c.id),goal=Math.max(1,c.dailyGoal||5),firstWorld=S.find(([sid])=>worldProgress(c,sid).next?.unlocked&&worldProgress(c,sid).done<worldProgress(c,sid).stages.length)?.[0];
 return `<div class="stack game-home game-home-14">
 <div class="game-controls"><div class="toolbar"><button class="button ghost tiny" data-action="nav" data-page="home">🏠 家長主頁</button><span class="p1-warning">🧪 單機試玩版・尚未雲端連線</span></div><button class="sound-switch" data-action="sound-toggle" aria-pressed="${sound}">${sound?'🔊 音效開啟':'🔈 音效關閉'}</button></div>
 <section class="welcome-scene"><div class="welcome-deco welcome-star1">✦</div><div class="welcome-deco welcome-star2">✧</div><div class="welcome-island" aria-hidden="true">🏰</div><div class="welcome-copy"><div class="welcome-kicker">THE FAMILY ADVENTURE</div><h2>今天一起去冒險！</h2><p>${escapeHTML(c.name)}，準備好探索新世界、收集學習徽章了嗎？</p><div class="welcome-statrow"><span>⭐ ${earnedCount(c.id)*5} 顆星</span><span>🏅 ${totalBadges} 枚徽章</span></div></div><div class="welcome-character" aria-hidden="true">${escapeHTML(c.avatar)}</div></section>
 <div class="adventure-dashboard"><section class="choose-player"><div class="section-head"><div><h2>🧒 選擇冒險家</h2><p class="muted small">每個孩子有自己的地圖與徽章</p></div></div><div class="kid-list kid-choices">${store.children.map(k=>`<button class="${k.id===c.id?'selected':''}" data-action="select-child" data-id="${escapeHTML(k.id)}"><span class="pick-avatar">${escapeHTML(k.avatar)}</span><span><strong>${escapeHTML(k.name)}</strong><div class="mini">${escapeHTML(gradeShort(k.grade))}</div></span></button>`).join('')}</div></section><section class="today-panel"><div class="today-title"><span>🧭 今日小任務</span><strong>${Math.min(completedToday,goal)} / ${goal}</strong></div><p>練習一小段也很棒，隨時可以休息。</p><div class="progressbar"><span style="width:${Math.min(100,Math.round(completedToday/goal*100))}%"></span></div><div class="today-actions">${firstWorld?`<button class="today-start" data-action="open-world" data-subject="${firstWorld}">▶ 繼續我的冒險</button>`:'<span class="mini">今天也可以重玩喜歡的關卡。</span>'}<button class="today-achievements" data-action="nav" data-page="achievements">🏅 我的徽章牆</button></div></section></div>
 <section class="card play-preferences"><div class="pref-row"><div><strong>🎓 個人學習設定</strong><p class="mini">每位冒險家的年級可獨立選擇，僅顯示家長已開放的程度。</p></div>${gradeSelectHTML(c)}${speechRateHTML()}${gradeHelperHTML(gradeChoice(c))}</div></section>
 <div class="study-shortcuts"><button class="study-shortcut" data-action="nav" data-page="battle"><span>🏁</span><strong>雙人輪流挑戰</strong><small>同一台裝置 · 同一組題目 ➜</small></button><button class="study-shortcut" data-action="nav" data-page="worksheet"><span>🧭</span><strong>今日任務卷</strong><small>依學科單元組成新挑戰 ➜</small></button><button class="study-shortcut" data-action="nav" data-page="practice"><span>📚</span><strong>自由練習與錯題複習</strong><small>練習單元 · 回顧錯題 ➜</small></button><button class="study-shortcut" data-action="nav" data-page="report"><span>📈</span><strong>我的學習紀錄</strong><small>查看每科表現 ➜</small></button></div>
 <div class="world-select-heading world-heading14"><div><span>🗺️ 選一個魔法世界</span><p>每張地圖都藏著暖身關、挑戰關和寶箱關</p></div><span class="world-index-sticker">3 個世界</span></div>
 <div class="worlds-grid worlds-14">${S.map(([sid])=>{const w=WORLDS[sid];const info=worldProgress(c,sid);const permitted=info.stages.length>0;return `<article class="portal-world world-${sid} world-tile14"><div class="world-scene world-scene14">${worldArtwork(sid)}<div class="scene-mascot">${sid==='english'?'🦋':sid==='math'?'👾':'🦉'}</div><span class="world-top-label">${sid==='english'?'01 · COLOR ISLAND':sid==='math'?'02 · SPACE QUEST':'03 · FOREST TALES'}</span></div><div class="portal-world-body"><div class="world-title-row"><h3>${escapeHTML(w.title)}</h3><span class="world-flag">${w.emoji}</span></div><p>${escapeHTML(w.story)}</p><div class="world-count">🏅 完成 ${info.done}/${info.stages.length} 關</div><div class="progressbar"><span style="width:${info.stages.length?info.done/info.stages.length*100:0}%"></span></div><button class="game-cta" data-action="open-world" data-subject="${sid}" ${permitted?'':'disabled'}>${permitted?'進入冒險地圖　➜':'家長尚未開放'}</button></div></article>`;}).join('')}</div>
 <div class="gentle-footer"><span>🌿 練習不限速度，答錯也不會扣星。</span><span>📚 「家閱」閱讀成就整合已預留，尚未正式連線。</span></div>
 </div>`;
}

function questionFor(stage){const n=Number(stage.key.slice(-2));return n===1?Q[stage.grade][stage.subject]:MORE[stage.grade][stage.subject][n-2];}

// 1.5 Interactive question banks. Records keep the same questionId as earlier versions.
const INTERACTIVE_PAIRS={
 english:{
 k4:[['🐶 狗','dog'],['🐱 貓','cat'],['☀️ 太陽','sun']],
 k5:[['🍎 蘋果','apple'],['🐱 貓','cat'],['📚 書','book']],
 g1:[['☀️ 太陽','sun'],['🐟 魚','fish'],['🐈 貓','cat']],
 g2:[['💧 水','water'],['📚 書','book'],['🌧️ 雨','rain']],
 g3:[['星期一','Monday'],['星期五','Friday'],['星期日','Sunday']],
 g4:[['圖書館','library'],['花園','garden'],['廚房','kitchen']],
 g5:[['因為','because'],['在…之前','before'],['在…之間','between']],
 g6:[['昨天','yesterday'],['明天','tomorrow'],['每天','every day']]
 },
 chinese:{
 k4:[['蘋果 🍎','ㄆㄧㄥˊ ㄍㄨㄛˇ'],['媽媽 👩','ㄇㄚ ㄇㄚ'],['大樹 🌳','ㄉㄚˋ ㄕㄨˋ']],
 k5:[['馬 🐴','ㄇㄚˇ'],['媽媽 👩','ㄇㄚ'],['罵 🗣️','ㄇㄚˋ']],
 g1:[['書 📖','ㄕㄨ'],['花 🌸','ㄏㄨㄚ'],['雨 🌧️','ㄩˇ']],
 g2:[['開心','高興'],['難過','傷心'],['安靜','寧靜']],
 g3:[['井然有序','整齊有條理'],['迫不及待','急著行動'],['一目了然','一看就明白']],
 g4:[['畫龍點睛','加上關鍵一筆'],['聚精會神','專注精神'],['半途而廢','做一半就放棄']],
 g5:[['主張','想表達的立場'],['證據','支持說法的資料'],['推論','依線索得到判斷']],
 g6:[['論點','文章核心主張'],['佐證','支持論點的證據'],['反思','重新思考檢討']]
 },
 math:{
 k4:[['🍎🍎','2'],['⭐⭐⭐','3'],['🐟🐟🐟🐟','4']],
 k5:[['5＋2','7'],['8－3','5'],['6＋4','10']],
 g1:[['9＋6','15'],['18－9','9'],['7＋8','15']],
 g2:[['7×3','21'],['6×4','24'],['36＋27','63']],
 g3:[['248＋375','623'],['72÷8','9'],['456－179','277']],
 g4:[['8×5','40'],['360÷12','30'],['0.4＋0.35','0.75']],
 g5:[['12與18最大公因數','6'],['15與25最大公因數','5'],['1/2＋1/4','3/4']],
 g6:[['120÷30','4'],['240÷6','40'],['3:4等值比','6:8']]
 }
};
// Some grades need unique answer labels to make matching unambiguous.
INTERACTIVE_PAIRS.math.g1[2]=['6＋8','14'];
const INTERACTIVE_SENTENCES={
 english:{k4:['I','see','red'],k5:['I','see','a','cat'],g1:['The','sun','is','big'],g2:['I','like','my','book'],g3:['I','go','to','school'],g4:['She','likes','reading','books'],g5:['They','are','playing','outside'],g6:['Could','you','help','me']},
 chinese:{k4:['我','愛','媽媽'],k5:['小狗','在','跑步'],g1:['我','喜歡','看書'],g2:['我','每天','都','讀書'],g3:['大家','一起','保護','環境'],g4:['閱讀','可以','開闊','視野'],g5:['寫作','需要','清楚','的','理由'],g6:['我們','應該','查證','資訊','來源']}
};
const CHINESE_LISTEN={
 k4:['包子',['ㄆ','ㄅ','ㄉ'],1,'「包」的聲母是ㄅ。','聽一聽「包子」的第一個聲母。'],
 k5:['媽媽',['ㄉ','ㄌ','ㄇ'],2,'「媽」的聲母是ㄇ。','聽一聽「媽媽」的第一個聲母。'],
 g1:['書包',['ㄕ','ㄙ','ㄔ'],0,'「書」的聲母是ㄕ。','聽一聽「書包」的第一個聲母。'],
 g2:['陽光',['ㄩㄢˊ','ㄧㄤˊ','ㄧㄢˊ'],1,'「陽」的注音是ㄧㄤˊ。','聽一聽「陽光」中「陽」的注音。'],
 g3:['迫不及待',['心情平靜','沒有耐心','急著行動'],2,'迫不及待表示急得不能再等。','聽到的成語，意思最接近哪一個？'],
 g4:['聚精會神',['四處遊玩','專心一致','非常疲倦'],1,'聚精會神表示專注。','聽成語，選出正確意思。'],
 g5:['論點',['文章的主張','文章的字體','文章的頁數'],0,'論點指作者想表達的主要主張。','聽詞語，選出正確意思。'],
 g6:['查證',['直接轉傳資訊','把字寫大','確認資訊是否可靠'],2,'查證指核對資料與證據。','聽詞語，選出正確意思。']
};
let taskState={typed:'',selectedLeft:null,matches:{},tokens:[]};
function resetTask(){taskState={typed:'',selectedLeft:null,matches:{},tokens:[]};try{speechSynthesis.cancel();}catch(e){}}

// Curated bopomofo support for early readers. Unknown/polyphonic characters remain plain text;
// avoid displaying guessed pronunciations when the reading is uncertain.
const ZHUYIN_COMMON={
  '表':'ㄅㄧㄠˇ', '示':'ㄕˋ', '寫':'ㄒㄧㄝˇ', '號':'ㄏㄠˋ', '單':'ㄉㄢ',
  '組':'ㄗㄨˇ', '符':'ㄈㄨˊ', '起':'ㄑㄧˇ', '通':'ㄊㄨㄥ', '對':'ㄉㄨㄟˋ',
  '列':'ㄌㄧㄝˋ', '罵':'ㄇㄚˋ', '順':'ㄕㄨㄣˋ', '代':'ㄉㄞˋ', '相':'ㄒㄧㄤ',
  '容':'ㄖㄨㄥˊ', '眉':'ㄇㄟˊ', '眼':'ㄧㄢˇ', '笑':'ㄒㄧㄠˋ', '兩':'ㄌㄧㄤˇ',
  '奶':'ㄋㄞˇ', '靜':'ㄐㄧㄥˋ', '光':'ㄍㄨㄤ', '就':'ㄐㄧㄡˋ', '序':'ㄒㄩˋ',
  '清':'ㄑㄧㄥ', '楚':'ㄔㄨˇ', '狀':'ㄓㄨㄤˋ', '合':'ㄏㄜˊ', '筆':'ㄅㄧˇ',
  '反':'ㄈㄢˇ', '接':'ㄐㄧㄝ', '近':'ㄐㄧㄣˋ', '見':'ㄐㄧㄢˋ', '垂':'ㄔㄨㄟˊ',
  '頭':'ㄊㄡˊ', '喪':'ㄙㄤˋ', '氣':'ㄑㄧˋ', '無':'ㄨˊ', '精':'ㄐㄧㄥ',
  '打':'ㄉㄚˇ', '采':'ㄘㄞˇ', '主':'ㄓㄨˇ', '晴':'ㄑㄧㄥˊ', '滴':'ㄉㄧ',
  '像':'ㄒㄧㄤˋ', '進':'ㄐㄧㄣˋ', '期':'ㄑㄧˊ', '末':'ㄇㄛˋ', '陳':'ㄔㄣˊ',
  '述':'ㄕㄨˋ', '步':'ㄅㄨˋ', '寧':'ㄋㄧㄥˊ',
  '我':'ㄨㄛˇ',
  '你':'ㄋㄧˇ',
  '他':'ㄊㄚ',
  '她':'ㄊㄚ',
  '它':'ㄊㄚ',
  '們':'ㄇㄣˊ',
  '的':'ㄉㄜ˙',
  '了':'ㄌㄜ˙',
  '是':'ㄕˋ',
  '不':'ㄅㄨˋ',
  '有':'ㄧㄡˇ',
  '在':'ㄗㄞˋ',
  '來':'ㄌㄞˊ',
  '去':'ㄑㄩˋ',
  '說':'ㄕㄨㄛ',
  '看':'ㄎㄢˋ',
  '讀':'ㄉㄨˊ',
  '聽':'ㄊㄧㄥ',
  '想':'ㄒㄧㄤˇ',
  '誰':'ㄕㄟˊ',
  '什':'ㄕㄣˊ',
  '麼':'ㄇㄜ˙',
  '哪':'ㄋㄚˇ',
  '個':'ㄍㄜˋ',
  '中':'ㄓㄨㄥ',
  '國':'ㄍㄨㄛˊ',
  '文':'ㄨㄣˊ',
  '英':'ㄧㄥ',
  '數':'ㄕㄨˋ',
  '學':'ㄒㄩㄝˊ',
  '年':'ㄋㄧㄢˊ',
  '級':'ㄐㄧˊ',
  '小':'ㄒㄧㄠˇ',
  '大':'ㄉㄚˋ',
  '班':'ㄅㄢ',
  '幼':'ㄧㄡˋ',
  '兒':'ㄦˊ',
  '園':'ㄩㄢˊ',
  '第':'ㄉㄧˋ',
  '一':'ㄧ',
  '二':'ㄦˋ',
  '三':'ㄙㄢ',
  '四':'ㄙˋ',
  '五':'ㄨˇ',
  '六':'ㄌㄧㄡˋ',
  '七':'ㄑㄧ',
  '八':'ㄅㄚ',
  '九':'ㄐㄧㄡˇ',
  '十':'ㄕˊ',
  '百':'ㄅㄞˇ',
  '千':'ㄑㄧㄢ',
  '萬':'ㄨㄢˋ',
  '零':'ㄌㄧㄥˊ',
  '幾':'ㄐㄧˇ',
  '顆':'ㄎㄜ',
  '圖':'ㄊㄨˊ',
  '片':'ㄆㄧㄢˋ',
  '紅':'ㄏㄨㄥˊ',
  '藍':'ㄌㄢˊ',
  '黃':'ㄏㄨㄤˊ',
  '綠':'ㄌㄩˋ',
  '色':'ㄙㄜˋ',
  '白':'ㄅㄞˊ',
  '黑':'ㄏㄟ',
  '灰':'ㄏㄨㄟ',
  '星':'ㄒㄧㄥ',
  '月':'ㄩㄝˋ',
  '日':'ㄖˋ',
  '天':'ㄊㄧㄢ',
  '太':'ㄊㄞˋ',
  '陽':'ㄧㄤˊ',
  '貓':'ㄇㄠ',
  '狗':'ㄍㄡˇ',
  '魚':'ㄩˊ',
  '鳥':'ㄋㄧㄠˇ',
  '牛':'ㄋㄧㄡˊ',
  '馬':'ㄇㄚˇ',
  '蘋':'ㄆㄧㄥˊ',
  '果':'ㄍㄨㄛˇ',
  '糖':'ㄊㄤˊ',
  '球':'ㄑㄧㄡˊ',
  '積':'ㄐㄧ',
  '木':'ㄇㄨˋ',
  '書':'ㄕㄨ',
  '包':'ㄅㄠ',
  '桌':'ㄓㄨㄛ',
  '子':'ㄗˇ',
  '椅':'ㄧˇ',
  '花':'ㄏㄨㄚ',
  '草':'ㄘㄠˇ',
  '樹':'ㄕㄨˋ',
  '雨':'ㄩˇ',
  '水':'ㄕㄨㄟˇ',
  '火':'ㄏㄨㄛˇ',
  '風':'ㄈㄥ',
  '雪':'ㄒㄩㄝˇ',
  '雲':'ㄩㄣˊ',
  '下':'ㄒㄧㄚˋ',
  '上':'ㄕㄤˋ',
  '左':'ㄗㄨㄛˇ',
  '右':'ㄧㄡˋ',
  '前':'ㄑㄧㄢˊ',
  '後':'ㄏㄡˋ',
  '裡':'ㄌㄧˇ',
  '外':'ㄨㄞˋ',
  '和':'ㄏㄜˊ',
  '與':'ㄩˇ',
  '加':'ㄐㄧㄚ',
  '減':'ㄐㄧㄢˇ',
  '乘':'ㄔㄥˊ',
  '除':'ㄔㄨˊ',
  '等':'ㄉㄥˇ',
  '於':'ㄩˊ',
  '比':'ㄅㄧˇ',
  '較':'ㄐㄧㄠˋ',
  '多':'ㄉㄨㄛ',
  '少':'ㄕㄠˇ',
  '同':'ㄊㄨㄥˊ',
  '樣':'ㄧㄤˋ',
  '正':'ㄓㄥˋ',
  '確':'ㄑㄩㄝˋ',
  '答':'ㄉㄚˊ',
  '案':'ㄢˋ',
  '選':'ㄒㄩㄢˇ',
  '出':'ㄔㄨ',
  '找':'ㄓㄠˇ',
  '請':'ㄑㄧㄥˇ',
  '問':'ㄨㄣˋ',
  '題':'ㄊㄧˊ',
  '要':'ㄧㄠˋ',
  '用':'ㄩㄥˋ',
  '再':'ㄗㄞˋ',
  '拿':'ㄋㄚˊ',
  '到':'ㄉㄠˋ',
  '共':'ㄍㄨㄥˋ',
  '剩':'ㄕㄥˋ',
  '走':'ㄗㄡˇ',
  '跑':'ㄆㄠˇ',
  '跳':'ㄊㄧㄠˋ',
  '玩':'ㄨㄢˊ',
  '遊':'ㄧㄡˊ',
  '戲':'ㄒㄧˋ',
  '媽':'ㄇㄚ',
  '爸':'ㄅㄚ',
  '弟':'ㄉㄧˋ',
  '妹':'ㄇㄟˋ',
  '哥':'ㄍㄜ',
  '姐':'ㄐㄧㄝˇ',
  '愛':'ㄞˋ',
  '喜':'ㄒㄧˇ',
  '歡':'ㄏㄨㄢ',
  '快':'ㄎㄨㄞˋ',
  '樂':'ㄌㄜˋ',
  '高':'ㄍㄠ',
  '興':'ㄒㄧㄥˋ',
  '開':'ㄎㄞ',
  '心':'ㄒㄧㄣ',
  '傷':'ㄕㄤ',
  '難':'ㄋㄢˊ',
  '過':'ㄍㄨㄛˋ',
  '美':'ㄇㄟˇ',
  '好':'ㄏㄠˇ',
  '新':'ㄒㄧㄣ',
  '舊':'ㄐㄧㄡˋ',
  '早':'ㄗㄠˇ',
  '安':'ㄢ',
  '晚':'ㄨㄢˇ',
  '每':'ㄇㄟˇ',
  '今':'ㄐㄧㄣ',
  '明':'ㄇㄧㄥˊ',
  '昨':'ㄗㄨㄛˊ',
  '時':'ㄕˊ',
  '間':'ㄐㄧㄢ',
  '晨':'ㄔㄣˊ',
  '午':'ㄨˇ',
  '點':'ㄉㄧㄢˇ',
  '分':'ㄈㄣ',
  '秒':'ㄇㄧㄠˇ',
  '量':'ㄌㄧㄤˋ',
  '長':'ㄔㄤˊ',
  '寬':'ㄎㄨㄢ',
  '低':'ㄉㄧ',
  '直':'ㄓˊ',
  '方':'ㄈㄤ',
  '圓':'ㄩㄢˊ',
  '形':'ㄒㄧㄥˊ',
  '角':'ㄐㄧㄠˇ',
  '面':'ㄇㄧㄢˋ',
  '度':'ㄉㄨˋ',
  '這':'ㄓㄜˋ',
  '那':'ㄋㄚˋ',
  '可':'ㄎㄜˇ',
  '以':'ㄧˇ',
  '能':'ㄋㄥˊ',
  '應':'ㄧㄥ',
  '該':'ㄍㄞ',
  '會':'ㄏㄨㄟˋ',
  '沒':'ㄇㄟˊ',
  '很':'ㄏㄣˇ',
  '真':'ㄓㄣ',
  '都':'ㄉㄡ',
  '特':'ㄊㄜˋ',
  '別':'ㄅㄧㄝˊ',
  '常':'ㄔㄤˊ',
  '平':'ㄆㄧㄥˊ',
  '故':'ㄍㄨˋ',
  '事':'ㄕˋ',
  '詞':'ㄘˊ',
  '語':'ㄩˇ',
  '字':'ㄗˋ',
  '音':'ㄧㄣ',
  '注':'ㄓㄨˋ',
  '聲':'ㄕㄥ',
  '母':'ㄇㄨˇ',
  '韻':'ㄩㄣˋ',
  '拼':'ㄆㄧㄣ',
  '標':'ㄅㄧㄠ',
  '調':'ㄉㄧㄠˋ',
  '排':'ㄆㄞˊ',
  '句':'ㄐㄩˋ',
  '閱':'ㄩㄝˋ',
  '課':'ㄎㄜˋ',
  '本':'ㄅㄣˇ',
  '練':'ㄌㄧㄢˋ',
  '習':'ㄒㄧˊ',
  '成':'ㄔㄥˊ',
  '功':'ㄍㄨㄥ',
  '失':'ㄕ',
  '勇':'ㄩㄥˇ',
  '敢':'ㄍㄢˇ',
  '魔':'ㄇㄛˊ',
  '法':'ㄈㄚˇ',
  '任':'ㄖㄣˋ',
  '務':'ㄨˋ',
  '關':'ㄍㄨㄢ',
  '卡':'ㄎㄚˇ',
  '闖':'ㄔㄨㄤˇ',
  '獎':'ㄐㄧㄤˇ',
  '勵':'ㄌㄧˋ',
  '紀':'ㄐㄧˋ',
  '錄':'ㄌㄨˋ',
  '解':'ㄐㄧㄝˇ',
  '釋':'ㄕˋ',
  '把':'ㄅㄚˇ',
  '放':'ㄈㄤˋ',
  '動':'ㄉㄨㄥˋ',
  '作':'ㄗㄨㄛˋ',
  '記':'ㄐㄧˋ',
  '得':'ㄉㄜˊ',
  '觀':'ㄍㄨㄢ',
  '察':'ㄔㄚˊ',
  '非':'ㄈㄟ',
  '透':'ㄊㄡˋ',
};
const ZHUYIN_PHRASES={'每天':'ㄇㄟˇ|ㄊㄧㄢ','快樂':'ㄎㄨㄞˋ|ㄌㄜˋ','看書':'ㄎㄢˋ|ㄕㄨ','媽媽':'ㄇㄚ|ㄇㄚ˙','哥哥':'ㄍㄜ|ㄍㄜ˙','妹妹':'ㄇㄟˋ|ㄇㄟ˙','來到':'ㄌㄞˊ|ㄉㄠˋ','多少':'ㄉㄨㄛ|ㄕㄠˇ','長方形':'ㄔㄤˊ|ㄈㄤ|ㄒㄧㄥˊ','長度':'ㄔㄤˊ|ㄉㄨˋ','找到':'ㄓㄠˇ|ㄉㄠˋ','漂亮':'ㄆㄧㄠˋ|ㄌㄧㄤˋ','什麼':'ㄕㄣˊ|ㄇㄜ˙','很快':'ㄏㄣˇ|ㄎㄨㄞˋ','難過':'ㄋㄢˊ|ㄍㄨㄛˋ','一共':'ㄧˊ|ㄍㄨㄥˋ','一個':'ㄧˊ|ㄍㄜˋ','一樣':'ㄧˊ|ㄧㄤˋ','第一':'ㄉㄧˋ|ㄧ','一起':'ㄧˋ|ㄑㄧˇ'};
function annotateText(text,grade){
 const t=String(text??'');if(!store.settings.zhuyinEnabled||gradeIndex(grade)>3)return escapeHTML(t);
 const phrases=Object.keys(ZHUYIN_PHRASES).sort((a,b)=>b.length-a.length);let out='';
 for(let i=0;i<t.length;){let match=phrases.find(x=>t.startsWith(x,i));if(match){const zs=ZHUYIN_PHRASES[match].split('|');out+=Array.from(match).map((c,j)=>`<ruby>${escapeHTML(c)}<rt>${escapeHTML(zs[j]||'')}</rt></ruby>`).join('');i+=match.length;continue;}
 const ch=Array.from(t.slice(i))[0],z=ZHUYIN_COMMON[ch];out+=z?`<ruby>${escapeHTML(ch)}<rt>${escapeHTML(z)}</rt></ruby>`:escapeHTML(ch);i+=ch.length;
 }
 return out;
}
function speakText(text,lang='zh-TW'){
 try{const u=window.speechSynthesis;if(!u||typeof SpeechSynthesisUtterance==='undefined'){notify('裝置不支援朗讀，請查看畫面文字與注音');return;}u.cancel();const utter=new SpeechSynthesisUtterance(String(text));utter.lang=lang;utter.rate=store.settings.speechRate;u.speak(utter);}catch(e){notify('這台裝置目前無法播放語音，請使用注音提示');}
}

function taskIcon(kind){return ({listen:'🔊',match:'🧩',order:'🧱',number:'🔢',choice:'✨'})[kind]||'🎯';}
function taskFor(stage,q){
 const n=Number(stage.key.slice(-2));const grade=stage.grade,sub=stage.subject;
 if(sub==='english'&&n===1&&grade==='k5')return {kind:'choice',label:'字母大小寫',prompt:q[0],instruction:'這一題要觀察英文字母的大小寫，不能只靠聽音判斷。',options:q[1],correct:q[2],explanation:q[3]};
 if(sub==='english'&&n===1)return {kind:'listen',label:'英文聽音選字',prompt:'先聽聲音，再選出你聽到的英文',instruction:'按下喇叭播放英文；沒有語音時可點選「顯示文字提示」。',spoken:q[1][q[2]],lang:'en-US',options:q[1],correct:q[2],explanation:q[3]};
 if(sub==='chinese'&&n===1){const item=CHINESE_LISTEN[grade];return {kind:'listen',label:'國語／注音聽辨',prompt:item[4],instruction:'聽發音後選答案，沒有語音時可顯示文字提示。',spoken:item[0],lang:'zh-TW',options:item[1],correct:item[2],explanation:item[3]};}
 if(sub==='math'&&n===1){const opt=q[1][q[2]];const expected=grade==='k4'?3:Number((String(opt).match(/\d+/)||[])[0]);return {kind:'number',label:'數字魔法鍵盤',prompt:q[0],instruction:'點數字鍵盤輸入答案，再按完成任務。',expected:String(expected),visual:grade==='k4'?'🍎🍎🍎':'',explanation:q[3]};}
 if(n===2){const pairs=INTERACTIVE_PAIRS[sub][grade];return {kind:'match',label:sub==='math'?'算式連連看':sub==='english'?'英文圖詞配對':'字詞配對',prompt:sub==='math'?'把算式和正確答案連在一起':sub==='english'?'把圖像／中文與英文配對':'把詞語和意思／注音配對',instruction:'先點左邊，再點右邊；也能用滑鼠拖曳左側卡片。三組都完成後即可通關。',pairs,explanation:'太好了！你完成了三組正確配對。'};}
 if(n===3&&sub!=='math'){const tokens=INTERACTIVE_SENTENCES[sub][grade];return {kind:'order',label:sub==='english'?'英文組句大挑戰':'國語句子拼拼樂',prompt:sub==='english'?'排列英文詞卡，組成通順句子':'依正確語序，排出一個通順句子',instruction:'依序點選下方詞卡，填入句子。點已選的詞可退回。',tokens,explanation:`完成句子：${tokens.join(sub==='english'?' ':'')}`};}
 return {kind:'choice',label:'思考闖關',prompt:q[0],instruction:'仔細想一想，再選出正確答案。',options:q[1],correct:q[2],explanation:q[3]};
}
function shuffledRight(){return [2,0,1];}
function shuffledTokens(tokens){const ids=tokens.map((_,i)=>i);return ids.length===3?[2,0,1]:ids.length===4?[2,0,3,1]:ids.length===5?[3,0,4,1,2]:ids.slice().reverse();}
function canSubmitTask(t){if(answerResult==='correct'||answerResult==='timeout')return false;switch(t.kind){case'listen':case'choice':return Number.isInteger(answer)&&answer>=0;case'number':return taskState.typed.length>0;case'match':return Object.keys(taskState.matches).length===t.pairs.length;case'order':return taskState.tokens.length===t.tokens.length;default:return false;}}
function taskCorrect(t){switch(t.kind){case'listen':case'choice':return answer===t.correct;case'number':return Number(taskState.typed)===Number(t.expected);case'match':return t.pairs.every((p,i)=>taskState.matches[i]===i);case'order':return t.tokens.every((_,i)=>taskState.tokens[i]===i);default:return false;}}
function renderTask(t,disabled){
 if(t.kind==='listen'||t.kind==='choice')return `<div class="interactive-exercise kind-${t.kind}">${t.kind==='listen'?`<div class="listen-panel"><div class="audio-orb" aria-hidden="true">🔊</div><div><strong>聽力魔法站</strong><small>可以重複播放，不限次數</small></div><button class="game-cta listen-play" data-action="speak" ${disabled?'disabled':''}>▶ 播放聲音</button><button class="hint-button" data-action="hint-text">顯示文字提示</button><div class="spoken-hint" id="spoken-hint" hidden>文字提示：${escapeHTML(t.spoken)}</div></div>`:''}<div class="option-list game-options">${t.options.map((op,i)=>`<button class="option ${answer===i?'selected':''} ${answerResult==='correct'&&i===t.correct?'correct':''} ${answerResult==='wrong'&&i===answer?'wrong':''}" data-action="choose-answer" data-option="${i}" ${disabled?'disabled':''}><span class="option-letter">${'ABC'[i]}</span><span>${annotateText(op,currentStage()?.grade)}</span><span class="option-check">${answer===i?'✓':'›'}</span></button>`).join('')}</div></div>`;
 if(t.kind==='number')return `<div class="interactive-exercise"><div class="number-display" aria-live="polite"><span class="number-spark">🔢</span><span>${escapeHTML(taskState.typed||'？')}</span><small>數字答案</small></div>${t.visual?`<div class="counting-objects">${t.visual}</div>`:''}<div class="number-keypad">${[1,2,3,4,5,6,7,8,9,'清除',0,'⌫'].map(n=>`<button type="button" data-action="digit" data-digit="${n}" ${disabled?'disabled':''}>${n}</button>`).join('')}</div></div>`;
 if(t.kind==='match'){const pairs=t.pairs;const order=shuffledRight();return `<div class="interactive-exercise"><div class="match-progress">✅ 已完成 ${Object.keys(taskState.matches).length} / ${pairs.length} 組</div><div class="match-board"><div class="match-column">${pairs.map(([left],i)=>`<button class="match-tile ${taskState.selectedLeft===i?'picked':''} ${i in taskState.matches?'matched':''}" data-action="match-left" data-index="${i}" draggable="true" ${disabled||i in taskState.matches?'disabled':''}>${annotateText(left,currentStage()?.grade)} ${i in taskState.matches?'✓':''}</button>`).join('')}</div><div class="match-arrows" aria-hidden="true">➜<br>➜<br>➜</div><div class="match-column">${order.map(i=>{const owner=Object.keys(taskState.matches).find(k=>taskState.matches[k]===i);return `<button class="match-tile ${owner!==undefined?'matched':''}" data-action="match-right" data-index="${i}" ${disabled||owner!==undefined?'disabled':''}>${annotateText(pairs[i][1],currentStage()?.grade)} ${owner!==undefined?'✓':''}</button>`;}).join('')}</div></div><p class="interaction-footnote">點左、點右即可配對；答錯可再試，不會扣星星。</p></div>`;}
 if(t.kind==='order'){const used=new Set(taskState.tokens),ids=shuffledTokens(t.tokens);return `<div class="interactive-exercise"><div class="sentence-slots">${t.tokens.map((_,i)=>`<button class="sentence-slot ${i<taskState.tokens.length?'filled':''}" data-action="remove-token" data-index="${i}" ${disabled||i>=taskState.tokens.length?'disabled':''}>${i<taskState.tokens.length?annotateText(t.tokens[taskState.tokens[i]],currentStage()?.grade):'＋'}</button>`).join('')}</div><div class="sentence-bank">${ids.map(i=>`<button class="word-tile ${used.has(i)?'used':''}" data-action="add-token" data-index="${i}" ${disabled||used.has(i)?'disabled':''}>${annotateText(t.tokens[i],currentStage()?.grade)}</button>`).join('')}</div><p class="interaction-footnote">${taskState.tokens.length} / ${t.tokens.length} 個詞卡已排列</p></div>`;}
 return '';
}
function speakTask(){const stage=currentStage();if(!stage)return;const t=taskFor(stage,questionFor(stage));if(t.kind!=='listen')return;const u=window.speechSynthesis;if(!u||typeof SpeechSynthesisUtterance==='undefined'){document.getElementById('spoken-hint')?.removeAttribute('hidden');notify('此裝置不支援語音，已顯示文字提示');return;}
 try{u.cancel();const utterance=new SpeechSynthesisUtterance(t.spoken);utterance.lang=t.lang;utterance.rate=store.settings.speechRate;utterance.pitch=1.08;const voices=u.getVoices();const voice=voices.find(v=>v.lang.toLowerCase()===t.lang.toLowerCase())||voices.find(v=>v.lang.toLowerCase().startsWith(t.lang.slice(0,2)));if(voice)utterance.voice=voice;u.speak(utterance);}catch(e){document.getElementById('spoken-hint')?.removeAttribute('hidden');notify('無法播放，請使用文字提示');}
}
function updateTaskView(){render();}
function completeMatch(right){const t=taskFor(currentStage(),questionFor(currentStage()));const left=taskState.selectedLeft;if(t.kind!=='match'||left===null)return;if(t.pairs[left]&&Number(right)===left){taskState.matches[left]=left;taskState.selectedLeft=null;soundEffect('tap');updateTaskView();}else{notify('再看看另一張卡片喔！');taskState.selectedLeft=null;updateTaskView();}}
function renderAdventureMap(stages,child,active,w){
 const rows=Math.ceil(stages.length/3),height=rows*156+28;
 const points=stages.map((_,i)=>{const row=Math.floor(i/3),col=i%3,ord=row%2===0?col:2-col;return {x:[164,500,836][ord],y:100+row*156};});
 const line=points.map((pt,i)=>{if(!i)return `M${pt.x} ${pt.y}`;const prev=points[i-1];return `C ${prev.x+(pt.x-prev.x)*.55} ${prev.y}, ${pt.x-(pt.x-prev.x)*.55} ${pt.y}, ${pt.x} ${pt.y}`;}).join(' ');
 const deco=w.decoration;
 return `<div class="landscape-map map-${w.scene} landscape-v14" style="height:${height}px">${worldArtwork(active.subject,'map')}<div class="landscape-sky">${deco.map((v,i)=>`<span class="sky-thing sky-${i}">${v}</span>`).join('')}</div><svg class="route-svg" viewBox="0 0 1000 ${height}" preserveAspectRatio="none" aria-hidden="true"><path d="${line}" stroke="rgba(255,255,255,.82)" stroke-width="23" stroke-linecap="round" fill="none"/><path d="${line}" stroke="rgba(112,100,88,.22)" stroke-width="3" stroke-dasharray="10 12" stroke-linecap="round" fill="none"/></svg>${stages.map((s,i)=>{const pt=points[i];const x=(pt.x/1000*100).toFixed(1);const icon=s.completed?'🌟':s.type==='boss'?'🎁':s.type==='challenge'?'⚡':'🏁';return `<div class="island-node ${s.completed?'complete':s.unlocked?'available':'inaccessible'} ${s.key===active.key?'selected':''}" style="left:${x}%;top:${pt.y}px"><button data-action="open-stage" data-key="${s.key}" ${s.unlocked?'':'disabled'} aria-label="${escapeHTML(s.title)} ${escapeHTML(gradeShort(s.grade))} ${s.completed?'已通關':s.unlocked?'可挑戰':'尚未解鎖'}"><span class="island-icon">${s.unlocked?icon:'🔒'}</span><span class="island-label">${s.title}</span><small>${escapeHTML(gradeShort(s.grade))}</small></button>${s.key===active.key?`<div class="walking-hero" aria-hidden="true">${escapeHTML(child.avatar)}</div>`:''}</div>`;}).join('')}</div>`;
}

function stageStatusText(s){return s.completed?'已完成':s.unlocked?'可挑戰':'尚未解鎖';}
function renderJourneyDock(stages,stage,q,child,w){
 const reward=stage.type==='boss'?'🎁 專屬徽章':'⭐ 通關星星';
 return `<div class="quest-dock14"><div class="quest-guide"><div class="guide-avatar" aria-hidden="true">${escapeHTML(child.avatar)}</div><div class="guide-text"><span class="guide-kicker">${escapeHTML(w.quest)}</span><h3>${escapeHTML(stage.title)} · ${escapeHTML(STAGE_META[stage.type].label)}</h3><p>${stage.type==='boss'?'最後一關！完成後有一個專屬冒險寶箱。':'完成這個關卡，地圖上的冒險路線就會往前延伸！'}</p></div><div class="guide-right"><strong>${stages.filter(s=>s.completed).length} / ${stages.length}</strong><span>地圖進度</span></div></div><div class="quest-metrics14"><span>🎓 ${escapeHTML(gradeShort(stage.grade))}</span><span>${reward}</span><span>${stage.completed?'✅ 已通關':'🚀 加油冒險'}</span></div><details class="stage-index14"><summary>🧭 展開全部關卡 <span>可直接點選已解鎖的關卡</span></summary><div class="stage-grid14">${stages.map(s=>`<button data-action="open-stage" data-key="${s.key}" class="stage-tile14 ${s.key===stage.key?'current':''} ${s.completed?'done':s.unlocked?'open':'locked'}" ${s.unlocked?'':'disabled'}><span>${s.completed?'🌟':s.type==='boss'?'🎁':s.unlocked?'🧩':'🔒'}</span><strong>${s.title}</strong><small>${escapeHTML(gradeShort(s.grade))}</small></button>`).join('')}</div></details></div>`;
}
function treasureName(child,stage){return store.treasures.find(t=>t.childId===child.id&&t.questionId===stage.key)?.name||'';}
function renderTreasureOverlay(stage,child){
 const badge=treasureName(child,stage)||`${WORLDS[selectedSubject].title}・${gradeShort(stage.grade)}勇者徽章`;
 return `<div class="treasure-shade" role="presentation"><div class="treasure-modal" role="dialog" aria-modal="true" aria-label="獲得寶箱徽章"><div class="firework" aria-hidden="true">✦　★　✦　★　✦</div><div class="chest-open" aria-hidden="true">🎁</div><div class="treasure-sparkles" aria-hidden="true">✨ ⭐ ✨</div><h2>冒險寶箱開啟！</h2><p>恭喜 ${escapeHTML(child.name)}！</p><div class="won-badge">🏅 ${escapeHTML(badge)}</div><p class="micro">這個徽章已記錄在你的成就寶箱中，重玩不會重複領取。</p><button class="game-cta" data-action="close-treasure">繼續冒險　➜</button></div></div>`;
}
function soundEffect(kind){
 if(!store.settings.soundEnabled)return;
 try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioCtx=audioCtx||new AC();if(audioCtx.state==='suspended')audioCtx.resume();const t=audioCtx.currentTime;const notes=kind==='win'?[523,659,784,1047]:kind==='chest'?[392,523,659,784,1047]:kind==='try'?[392,330]:[493];
 notes.forEach((hz,i)=>{const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type='sine';osc.frequency.value=hz;const start=t+i*.09;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(.045,start+.015);gain.gain.exponentialRampToValueAtTime(.0001,start+.22);osc.connect(gain);gain.connect(audioCtx.destination);osc.start(start);osc.stop(start+.24);});
 }catch(e){/* browsers may block audio */}
}



function bossLimitSec(stage){return gradeIndex(stage?.grade)<=1?120:gradeIndex(stage?.grade)<=3?90:60;}
function bossBestRows(stage,child){if(!stage||!child)return [];const best=new Map();for(const r of store.bossRecords){const member=byChild(r.childId);if(!member||member.householdId!==child.householdId||r.stageKey!==stage.key||r.limitSec!==bossLimitSec(stage))continue;const old=best.get(r.childId);if(!old||r.elapsedMs<old.elapsedMs)best.set(r.childId,r);}return [...best.values()].sort((a,b)=>a.elapsedMs-b.elapsedMs).slice(0,8);}
function readableSeconds(ms){return (ms/1000).toFixed(1)+' 秒';}
function renderBossChallenge(stage,child){if(stage.type!=='boss')return '';
 const rows=bossBestRows(stage,child),own=rows.find(r=>r.childId===child.id),limit=bossLimitSec(stage);
 return `<section class="boss-arcade"><div class="boss-head"><div><span class="arcade-kicker">⚔️ BOSS TIME ATTACK</span><h3>限時挑戰魔王</h3><p>在 ${limit} 秒內完成這一關，可記下本次通關時間。也能選擇不計時練習。</p></div><button class="boss-start" data-action="boss-start" ${stage.unlocked?'':'disabled'}>${timedBossActive?'🔄 重新開始限時賽':'⏱️ 開始限時 Boss 賽'}</button></div>${timedBossActive?`<div class="boss-live">🔥 限時模式進行中 <strong>${remainingSeconds()} 秒</strong></div>`:''}<div class="boss-best">${own?`🏅 我的本關最佳：${readableSeconds(own.elapsedMs)}`:'✨ 尚無本關限時通關紀錄'}</div><h4>🏆 同家庭・同關卡・最快通關（每人最佳）</h4><div class="boss-ranks">${rows.length?rows.map((r,i)=>{const kid=byChild(r.childId);return `<div class="boss-rank"><span>${i+1}. ${escapeHTML(kid?.avatar||'🌟')} ${escapeHTML(kid?.name||'冒險家')}</span><strong>${readableSeconds(r.elapsedMs)}</strong></div>`;}).join(''):'<p class="muted small">目前還沒有紀錄；完成限時挑戰後就會出現在這裡。</p>'}</div></section>`;
}
function startBossChallenge(){const kid=byChild(selectedChild),stage=currentStage();if(!kid||!stage||stage.type!=='boss'||!stage.unlocked)return;openStage(stage.key);timedBossActive=true;bossRunCompleted=false;startTimer(bossLimitSec(stage));render();notify(`⚔️ 限時 ${bossLimitSec(stage)} 秒挑戰開始！`);requestAnimationFrame(()=>document.querySelector('.question-stage14')?.scrollIntoView({block:'center',behavior:'smooth'}));}
function finishBossSuccess(kid,stage,elapsedMs){if(!timedBossActive||stage.type!=='boss'||bossRunCompleted)return;const limit=bossLimitSec(stage);if(elapsedMs<=limit*1000){store.bossRecords.push({id:id(),childId:kid.id,householdId:kid.householdId,stageKey:stage.key,subject:stage.subject,grade:stage.grade,elapsedMs,limitSec:limit,at:nowISO()});if(store.bossRecords.length>2000)store.bossRecords=store.bossRecords.slice(-2000);bossRunCompleted=true;}timedBossActive=false;}
function quiz(){
 const c=byChild(selectedChild),stages=getStages(c,selectedSubject).filter(s=>s.grade===gradeChoice(c));
 if(!c||!stages.length)return `<div class="empty">這位孩子目前沒有開放此學科。<button class="button" data-action="nav" data-page="play">回到世界選擇</button></div>`;
 if(!stages.some(s=>s.key===selectedLevelKey&&s.unlocked))selectedLevelKey=chooseBestStage(c,selectedSubject);
 const stage=currentStage(),q=questionFor(stage),w=WORLDS[selectedSubject],task=taskFor(stage,q);
 const nextKey=nextStageKey(),stars=levelStars(stage),done=stages.filter(s=>s.completed).length;
 const timer=(store.settings.timerEnabled||timedBossActive)?`<span class="game-chip" data-role="timer">⏱️ ${answerResult==='correct'?'完成':remainingSeconds()+' 秒'}</span>`:'<span class="game-chip">🌿 無壓力模式</span>';
 const route=renderAdventureMap(stages,c,stage,w);
 const dock=renderJourneyDock(stages,stage,{...q,0:task.prompt},c,w);
 const ready=canSubmitTask(task),disabled=answerResult==='correct'||answerResult==='timeout';
 return `<div class="stack game-adventure world-${selectedSubject}">
 <div class="game-controls"><button class="button ghost" data-action="nav" data-page="play">← 返回冒險世界</button><div class="toolbar"><button class="button ghost tiny" data-action="nav" data-page="home">🏠 家長主頁</button><button class="button ghost tiny" data-action="nav" data-page="achievements">🏅 徽章館</button><button class="sound-switch" data-action="sound-toggle" aria-pressed="${!!store.settings.soundEnabled}">${store.settings.soundEnabled?'🔊 音效開':'🔈 音效關'}</button><button class="sound-switch" data-action="timer-toggle" aria-pressed="${!!store.settings.timerEnabled}">${store.settings.timerEnabled?'⏱️ 計時開':'🌿 計時關'}</button>${speechRateHTML()}${gradeHelperHTML(stage.grade)}</div></div>
 <section class="adventure-banner"><div class="banner-art">${w.emoji}</div><div class="adventure-banner-copy"><span class="scene-eyebrow">${escapeHTML(c.avatar)} ${escapeHTML(c.name)} 的探險日記</span><h2>${escapeHTML(w.title)}</h2><p>${escapeHTML(w.quest)}</p></div><div class="banner-counter">⭐ ${earnedCount(c.id)*5}<small>累積星星</small></div></section>
 <section class="card journey-card journey-rich ${answerResult==='correct'?'success-burst':''}"><div class="section-head"><div><h2>🗺️ 冒險地圖</h2><p class="muted small">循著地圖前進，輪流挑戰聽音、配對、組句和數字遊戲</p></div><span class="pill">${done} / ${stages.length} 關</span></div>${route}${dock}<div class="mission-board"><div class="battle-top"><div class="toolbar"><span class="pill yellow">${STAGE_META[stage.type].icon} ${escapeHTML(STAGE_META[stage.type].label)}</span><span class="pill">${escapeHTML(gradeShort(stage.grade))}</span><span class="pill interactive-label">${taskIcon(task.kind)} ${escapeHTML(task.label)}</span></div><div class="star-meter">${missionStarsText(stage)}</div></div><div class="quest-intro quest-intro-rich"><div class="quest-character" aria-hidden="true">${escapeHTML(c.avatar)}</div><div><strong>第 ${stage.index} 關 · ${STAGE_META[stage.type].label}</strong><p>${stage.type==='boss'?'這是本段冒險的寶箱挑戰！完成後即可打開寶箱。':'動手操作吧！完成這項任務就可以繼續前進。'}</p></div>${timer}</div><div class="question-stage14 interactive-stage"><div class="question-flag14">🎯 ${escapeHTML(task.label)}</div>${gradeIndex(stage.grade)<=3?`<button class="speak-prompt" data-action="speak-question">🔊 朗讀題目</button>`:''}<h2 class="quiz-title">${annotateText(task.prompt,stage.grade)}</h2><p class="interaction-hint">${annotateText(task.instruction||'完成題目後，按下送出答案。',stage.grade)}</p>${renderTask(task,disabled)}</div>${answerResult?resultBox([task.prompt,[],task.correct,task.explanation],stage,nextKey,stars):''}<div class="game-actions">${answerResult==='correct'?`${stage.type==='boss'?`<button class="chest-button" data-action="open-treasure">🎁 ${treasureName(c,stage)?'查看已獲得寶箱':'開啟冒險寶箱'}</button>`:''}<button class="game-cta" data-action="${nextKey?'next-stage':'nav'}" ${nextKey?'':'data-page="play"'}>${nextKey?'🚀 前往下一關':'🎊 完成世界旅程'}</button><button class="button ghost" data-action="retry-stage">再練習一次</button>`:`<button class="game-cta" data-action="${answerResult==='timeout'?'retry-stage':'submit-answer'}" ${!ready&&answerResult!=='timeout'?'disabled':''}>${answerResult==='timeout'?'再挑戰一次':'✨ 完成任務'}</button><button class="button ghost" data-action="retry-stage">重新挑戰</button>`}</div>${renderBossChallenge(stage,c)}</div></section><div class="notice info">這是 72 個關卡位置的互動試玩版：英文與國語有聽辨、配對、組句，數學有數字鍵盤、算式配對與思考題。語音由裝置內建服務提供，部分裝置可能沒有對應語音，會顯示文字備援。資料尚未雲端同步，請定期匯出 JSON。</div>
 ${treasureOverlay?renderTreasureOverlay(stage,c):''}</div>`;
}
function resultBox(q,stage,nextKey,stars){
 if(answerResult==='correct')return `<div class="celebration success-confetti" role="status"><div class="confetti-pieces" aria-hidden="true">🎉　✨　🌟　✨　🎊</div><span class="celebration-star">🏆</span><h3>闖關成功！</h3><p>${escapeHTML(q[3])}</p><strong class="celebration-reward">⭐ ${stars} / 3 關卡星　·　${stage.type==='boss'?'🎁 寶箱開啟資格':'🗺️ 解鎖下一關'}</strong>${nextKey?'<div class="small">下一個關卡已經開放囉！</div>':'<div class="small">這個世界已經探索完成！</div>'}</div>`;
 if(answerResult==='timeout')return `<div class="result-panel bad"><div class="result-emoji">🌼</div><div><strong>計時結束了</strong><p>沒關係，可以再試一次！</p><div class="small">${escapeHTML(q[3])}</div></div></div>`;
 return `<div class="result-panel bad"><div class="result-emoji">💡</div><div><strong>還差一點點！</strong><p>${escapeHTML(q[3])}</p><div class="small">試試其他答案，答錯不會扣星星。</div></div></div>`;
}
function historyTable(rows){return rows.length?`<div class="table-wrap"><table class="table"><thead><tr><th>時間</th><th>孩子</th><th>科目／年級</th><th>結果</th><th>獎勵</th></tr></thead><tbody>${rows.map(p=>{const reward=[p.firstReward?'+5 ⭐':'',p.quickBonus?'⚡ 快速通關':''].filter(Boolean).join(' ')||'—';return `<tr><td>${escapeHTML(fmtDate(p.at))}</td><td>${escapeHTML(byChild(p.childId)?.name||'已刪除成員')}</td><td>${escapeHTML(subjName(p.subject))}<br>${escapeHTML(gradeLabel(p.grade))}</td><td>${p.correct?'✅ 正確':p.reason==='timeout'?'⏰ 逾時':'🔄 複習中'}</td><td>${reward}</td></tr>`;}).join('')}</tbody></table></div>`:'<div class="empty"><div class="empty-icon">🪴</div>目前還沒有作答紀錄。<br>可先到「兒童入口」完成示範關卡。</div>'; }
function bossHallHTML(){
 const group=new Map();for(const r of store.bossRecords){const c=byChild(r.childId);if(!c||previewHousehold!=='all'&&c.householdId!==previewHousehold)continue;const key=`${c.householdId}|${r.stageKey}`;if(!group.has(key))group.set(key,[]);group.get(key).push(r);}
 const blocks=[...group.entries()].slice(-12).reverse().map(([key,list])=>{const sample=list[0],h=byHouse(sample.householdId),house=byHouse(sample.householdId);const best=new Map();for(const row of list){if(!best.has(row.childId)||row.elapsedMs<best.get(row.childId).elapsedMs)best.set(row.childId,row);}const ranks=[...best.values()].sort((a,b)=>a.elapsedMs-b.elapsedMs).slice(0,5);return `<div class="hall-group"><strong>${escapeHTML(house?.name||'家庭')} · ${escapeHTML(subjName(sample.subject))} · ${escapeHTML(gradeShort(sample.grade))} · Boss 關</strong>${ranks.map((r,i)=>`<div><span>${i+1}. ${escapeHTML(byChild(r.childId)?.avatar||'🌟')} ${escapeHTML(byChild(r.childId)?.name||'冒險家')}</span><b>${readableSeconds(r.elapsedMs)}</b></div>`).join('')}</div>`;});
 return `<section class="card"><div class="section-head"><div><h2>⏱️ 限時 Boss 通關紀錄</h2><p class="muted small">依家庭、年級及關卡分開，只顯示各孩子的最快時間；不公開到網路。</p></div></div><div class="hall-grid">${blocks.join('')||'<p class="muted small">還沒有完成限時 Boss 賽。到地圖的 Boss 關開啟限時挑戰即可留下紀錄。</p>'}</div></section>`;}
function achievements(){const rows=store.progress.slice().reverse();const members=store.children.filter(c=>previewHousehold==='all'||c.householdId===previewHousehold);const total=members.reduce((sum,c)=>sum+store.treasures.filter(t=>t.childId===c.id).length,0);return `<div class="stack"><section class="badge-room14"><div class="badge-room-head"><span>🏰 FAMILY HALL OF FAME</span><h2>家族榮耀徽章館</h2><p>每個寶箱都是努力學習的紀念，所有孩子都能依自己的步調前進。</p></div><div class="badge-room-stats">🏅 目前已收藏 ${total} 枚專屬徽章</div><div class="badge-pedestals">${S.map(([sid])=>{const count=store.treasures.filter(t=>members.some(c=>c.id===t.childId)&&t.questionId?.startsWith(sid+'_')).length;return `<div class="badge-pedestal ${sid}"><div class="medal-icon">${sid==='english'?'🌈':sid==='math'?'🚀':'🌳'}</div><strong>${escapeHTML(WORLDS[sid].title)}</strong><small>${count} 枚徽章</small></div>`;}).join('')}</div></section><section class="card"><div class="section-head"><div><h2>🏆 家族成就看板</h2><p class="muted small">可依家庭查看孩子已獲得的星星與通關紀錄</p></div><div class="selectrow"><label class="mini">篩選家庭</label><select class="field" id="filter-house"><option value="all">全部家庭</option>${store.households.map(h=>`<option value="${h.id}" ${previewHousehold===h.id?'selected':''}>${escapeHTML(h.name)}</option>`).join('')}</select></div></div><div class="grid3">${store.children.filter(c=>previewHousehold==='all'||c.householdId===previewHousehold).map(c=>`<div class="card" style="padding:18px"><div class="child-card" style="padding:0;border:none"><div class="avatar">${escapeHTML(c.avatar)}</div><div class="child-meta"><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(gradeLabel(c.grade))}・${earnedCount(c.id)*5} 顆星</p></div></div><div class="divider"></div><div class="mini">已完成 ${new Set(store.progress.filter(p=>p.childId===c.id&&p.correct).map(p=>p.questionId)).size} 關｜🎁 寶箱徽章 ${store.treasures.filter(t=>t.childId===c.id).length} 個</div><div class="treasure-inventory">${store.treasures.filter(t=>t.childId===c.id).map(t=>`<span>🏅 ${escapeHTML(t.name)}</span>`).join('')||'<span>尚未獲得寶箱徽章</span>'}</div><div class="toolbar" style="margin-top:12px"><button class="button secondary tiny" data-action="show-history" data-id="${c.id}">查看紀錄</button></div></div>`).join('')||'<div class="empty">沒有符合條件的孩子</div>'}</div></section>${bossHallHTML()}<section class="card"><h2 class="card-title">🕒 最近紀錄</h2>${historyTable(rows.slice(0,30))}</section></div>`;}
function backup(){return `<div class="stack"><section class="card"><h2 class="card-title">💾 匯出與還原</h2><div class="grid2"><div class="backup-card"><strong>匯出目前資料</strong><p class="small" style="margin-top:8px">下載 JSON，保留家庭、孩子、闖關紀錄、自訂題目及練習紀錄。</p><button class="button" style="margin-top:20px" data-action="export">下載 JSON 備份</button></div><div class="backup-card"><strong>匯入備份</strong><p class="small" style="margin-top:8px">可將先前匯出的 JSON 載回此原型。匯入會覆蓋目前資料。</p><button class="button secondary" style="margin-top:20px" data-action="import">選擇 JSON 還原</button></div></div></section><section class="card"><h2 class="card-title">🔍 資料狀態</h2><div class="grid2"><div class="backup-card"><strong>本機儲存</strong><p class="small" style="margin-top:8px">${canSave?'✅ 已允許保存':'⚠️ 儲存失敗或受限制'}</p></div><div class="backup-card"><strong>最近更新</strong><p class="small" style="margin-top:8px">${escapeHTML(fmtDate(store.updatedAt))}</p></div><div class="backup-card"><strong>目前資料</strong><p class="small" style="margin-top:8px">${store.households.length} 家庭、${store.children.length} 位孩子、${store.progress.length} 筆地圖作答、${store.practiceAttempts.length} 筆練習作答</p></div><div class="backup-card"><strong>雲端狀態</strong><p class="small" style="margin-top:8px">尚未啟用 Firebase / 真實登入</p></div></div><div class="toolbar" style="margin-top:17px"><button class="button danger" data-action="reset-demo">還原原始示範資料</button><button class="button ghost" data-action="clear-progress">只清空作答紀錄</button></div></section><div class="notice info">💡 <strong>後續正式版：</strong>成人登入（Firebase Authentication）＋家庭／兒童資料雲端儲存（Firestore）＋安全規則驗證＋定期匯出。此原型可直接測試操作流程，但不能當作真實家庭資訊的安全資料庫。</div></div>`;}
function render(){el.innerHTML=frame(({home,family,permission,play,achievements,backup,quiz,practice:practicePage,bank:bankPage,report:reportPage,worksheet:worksheetPage,battle:battlePage})[page]());const filter=document.getElementById('filter-house');if(filter)filter.onchange=e=>{previewHousehold=e.target.value;render();};}

function openDialog(title,html,onSubmit,extra=''){document.getElementById('dialog-body').innerHTML=`<form id="editor-form" method="dialog" class="dialog-inner"><h2>${escapeHTML(title)}</h2>${html}<div class="dialog-buttons"><button class="button ghost" value="cancel" type="button" id="dialog-cancel">取消</button><button class="button" type="submit">儲存設定</button>${extra}</div></form>`;document.getElementById('dialog-cancel').onclick=()=>dlg.close();document.getElementById('editor-form').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);const result=onSubmit(fd);if(result!==false)dlg.close();};dlg.showModal();}
const textInput=(label,key,value='',max=30)=>`<div class="form-row"><label for="edit-${key}">${escapeHTML(label)}</label><input class="field" id="edit-${key}" name="${escapeHTML(key)}" maxlength="${max}" value="${escapeHTML(value)}" required></div>`;
const selector=(label,key,options,value)=>`<div class="form-row"><label for="edit-${key}">${escapeHTML(label)}</label><select class="field" id="edit-${key}" name="${escapeHTML(key)}">${options.map(([id,name])=>`<option value="${escapeHTML(id)}" ${id===value?'selected':''}>${escapeHTML(name)}</option>`).join('')}</select></div>`;
function editHouse(h){openDialog(h?'修改家庭設定':'新增家庭',textInput('家庭名稱（可自由命名）','name',h?.name||'',30),fd=>{const name=String(fd.get('name')||'').trim();if(!name){notify('請輸入家庭名稱');return false}mutate(()=>{if(h)h.name=name;else store.households.push({id:id(),name,adults:[]});});notify('家庭已儲存');},h?`<button class="button danger" type="button" id="remove-house">刪除家庭</button>`:'');if(h)document.getElementById('remove-house').onclick=()=>{if(!confirm(`確定刪除「${h.name}」家庭及底下所有孩子的學習資料？此操作無法復原。`))return;mutate(()=>{const gone=new Set(store.children.filter(c=>c.householdId===h.id).map(c=>c.id));store.children=store.children.filter(c=>!gone.has(c.id));store.progress=store.progress.filter(p=>!gone.has(p.childId));store.practiceAttempts=store.practiceAttempts.filter(p=>!gone.has(p.childId));store.treasures=store.treasures.filter(t=>!gone.has(t.childId));store.bossRecords=store.bossRecords.filter(r=>!gone.has(r.childId));store.duels=store.duels.filter(m=>!m.players.some(pid=>gone.has(pid)));store.worksheets=store.worksheets.filter(w=>!gone.has(w.childId));store.customQuestions=store.customQuestions.filter(q=>q.householdId!==h.id);store.households=store.households.filter(x=>x.id!==h.id);if(gone.has(selectedChild))selectedChild=store.children[0]?.id||null;});dlg.close();notify('家庭已刪除');};}
function editAdult(h,a){openDialog(a?'修改成人成員':'新增成人成員',textInput('顯示名稱','name',a?.name||'',22)+selector('角色標籤（示範用途）','role',[['household_admin','家庭成人'],['family_admin','家族管理者']],a?.role||'household_admin'),fd=>{const name=String(fd.get('name')||'').trim();const role=String(fd.get('role'));if(!name)return false;mutate(()=>{if(a){a.name=name;a.role=role;}else h.adults.push({id:id(),name,role});});notify('成人成員已儲存');},a?'<button class="button danger" type="button" id="remove-adult">刪除成人</button>':'');if(a)document.getElementById('remove-adult').onclick=()=>{if(!confirm(`確定刪除成人「${a.name}」？`))return;mutate(()=>h.adults=h.adults.filter(x=>x.id!==a.id));dlg.close();notify('成人已刪除');};}
function gradeDefault(grade){let i=gradeIndex(grade);if(i<0)i=0;const list=G.slice(Math.max(0,i-1),i+1).map(g=>g[0]);return {english:[...list],math:[...list],chinese:[...list]};}
function editChild(c,presetHouse){if(!store.households.length){notify('請先建立家庭');return;}const house=store.households.find(h=>h.id===(c?.householdId||presetHouse))||store.households[0];const html=textInput('孩子的顯示名稱或暱稱','name',c?.name||'',24)+selector('所屬家庭','household',store.households.map(h=>[h.id,h.name]),house.id)+selector('目前就讀年級','grade',G,c?.grade||'k5')+selector('選擇頭像','avatar',AVATARS.map(a=>[a,a]),c?.avatar||'🦊');openDialog(c?'編輯兒童資料':'新增兒童玩家',html,fd=>{const name=String(fd.get('name')||'').trim(),householdId=String(fd.get('household')),grade=String(fd.get('grade')),avatar=String(fd.get('avatar'));if(!name||!byHouse(householdId)||!G.some(g=>g[0]===grade)){notify('資料不完整');return false}mutate(()=>{if(c){c.name=name;c.householdId=householdId;c.grade=grade;c.avatar=avatar;}else{const kid={id:id(),householdId,name,grade,avatar,permissions:gradeDefault(grade),dailyGoal:5};store.children.push(kid);selectedChild=kid.id;}});notify(c?'孩子資料已修改':'孩子已新增，可到學習權限設定年級');},c?'<button class="button danger" type="button" id="remove-child">刪除孩子</button>':'');if(c)document.getElementById('remove-child').onclick=()=>{if(!confirm(`確定刪除「${c.name}」及所有學習紀錄？`))return;mutate(()=>{store.children=store.children.filter(x=>x.id!==c.id);store.progress=store.progress.filter(p=>p.childId!==c.id);store.practiceAttempts=store.practiceAttempts.filter(p=>p.childId!==c.id);store.treasures=store.treasures.filter(t=>t.childId!==c.id);store.bossRecords=store.bossRecords.filter(r=>r.childId!==c.id);store.duels=store.duels.filter(m=>!m.players.includes(c.id));store.worksheets=store.worksheets.filter(w=>w.childId!==c.id);if(selectedChild===c.id)selectedChild=store.children[0]?.id||null;});dlg.close();notify('孩子已刪除');};}
function showHistory(cid){const c=byChild(cid);openDialog(`${c?.name||'兒童'}的學習紀錄`,historyTable(store.progress.filter(p=>p.childId===cid).slice(-30).reverse()),()=>true);document.querySelector('#editor-form button[type="submit"]').classList.add('hidden');}
function exportJSON(){const blob=new Blob([JSON.stringify(store,null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`家族學習冒險王國_備份_${new Date().toLocaleDateString('sv-SE')}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('備份檔已開始下載');}
async function importJSON(file){if(!file)return;if(file.size>5*1024*1024){notify('檔案過大（上限 5 MB）');return;}try{const data=JSON.parse(await file.text());if(!valid(data)){notify('備份格式不符，沒有覆蓋資料');return;}if(!confirm('匯入將覆蓋目前全部家庭、權限及學習紀錄。確定繼續？'))return;store=data;normalizeStore();selectedChild=store.children[0]?.id||null;page='home';save();render();notify('備份已匯入，請確認資料內容');}catch(e){notify('JSON 檔無法讀取，請確認檔案格式');}finally{document.getElementById('import-file').value='';}}
function submitQuiz(){
 const child=byChild(selectedChild),stage=currentStage(),q=stage?questionFor(stage):null;
 const task=stage?taskFor(stage,q):null;
 if(!child||!stage||!stage.unlocked||!q||!task||!canSubmitTask(task)||answerResult==='correct'||answerResult==='timeout')return;
 if((store.settings.timerEnabled||timedBossActive)&&remainingSeconds()===0){handleTimeout();return;}
 const correct=taskCorrect(task),elapsedMs=Date.now()-quizStartedAt,elapsed=elapsedMs/1000;
 const prevReward=store.progress.some(p=>p.childId===child.id&&p.questionId===stage.key&&p.firstReward);
 const prevQuick=store.progress.some(p=>p.childId===child.id&&p.questionId===stage.key&&p.quickBonus);
 const quickBonus=correct&&store.settings.timerEnabled&&elapsed<=Math.max(12,stage.timeLimit*.5)&&!prevQuick;
 answerResult=correct?'correct':'wrong';
 if(correct){finishBossSuccess(child,stage,elapsedMs);clearTimer();}
 mutate(()=>store.progress.push({id:id(),childId:child.id,subject:selectedSubject,grade:stage.grade,questionId:stage.key,correct,firstReward:correct&&!prevReward,quickBonus,at:nowISO()}));
 soundEffect(correct?'win':'try');
 notify(correct?(prevReward?'答對了！歡迎繼續探索':'闖關成功！獲得 5 顆星！'):'答錯也沒關係，再試試看！');
}
el.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action,which=b.dataset.id;switch(a){
 case 'duel-begin':beginDuel();break;
 case 'duel-go':startDuelRound();break;
 case 'duel-answer':answerDuel(Number(b.dataset.option));break;
 case 'duel-speak':if(duelRun?.phase==='playing')speakText(duelPrompt()[0],'zh-TW');break;
 case 'duel-cancel':stopDuelTimer();duelRun=null;render();break;
 case 'duel-again':stopDuelTimer();duelRun=null;render();break;
 case 'nav':timedBossActive=false;stopDuelTimer();if(duelRun?.phase==='playing')duelRun=null;if(b.dataset.page==='practice'){practicePick='';practiceFeedback=null;practiceAnswer=-1;}resetTask();clearTimer();treasureOverlay=false;page=b.dataset.page;answer=-1;answerResult=null;render();window.scrollTo({top:0,behavior:'instant'});break;case 'rename-clan':openDialog('修改家族名稱',textInput('家族名稱','name',store.clan.name,32),fd=>{const name=String(fd.get('name')||'').trim();if(!name)return false;mutate(()=>store.clan.name=name);});break;case 'add-house':editHouse();break;case 'edit-house':editHouse(byHouse(which));break;case 'add-adult':editAdult(byHouse(which));break;case 'edit-adult':{const h=byHouse(b.dataset.house);editAdult(h,h?.adults.find(x=>x.id===which));break;}case 'add-child':editChild(null,b.dataset.house);break;case 'edit-child':editChild(byChild(which));break;case 'select-child':timedBossActive=false;resetTask();selectedChild=which;answer=-1;answerResult=null;clearTimer();render();break;case 'set-default':{const c=byChild(which);if(!c)break;if(confirm(`將「${c.name}」三科的勾選年級重設為目前年級及前一年級？`))mutate(()=>c.permissions=gradeDefault(c.grade));break;}case 'open-world':clearTimer();openWorld(b.dataset.subject);soundEffect('tap');break;case 'zhuyin-toggle':store.settings.zhuyinEnabled=!store.settings.zhuyinEnabled;save();render();break;case 'sound-toggle':store.settings.soundEnabled=!store.settings.soundEnabled;save();render();if(store.settings.soundEnabled)soundEffect('tap');break;case 'timer-toggle':if(timedBossActive){notify('限時 Boss 進行中不能取消計時，可重新挑戰一般關卡');break;}store.settings.timerEnabled=!store.settings.timerEnabled;save();{const stage=currentStage();if(stage&&answerResult!=='correct')startTimer(stage.timeLimit);render();}break;case 'open-treasure':{const child=byChild(selectedChild),stage=currentStage();if(!child||!stage||stage.type!=='boss'||!stage.completed)break;const name=`${WORLDS[selectedSubject].title}・${gradeShort(stage.grade)}勇者徽章`;if(!treasureName(child,stage)){store.treasures.push({id:id(),childId:child.id,questionId:stage.key,name,at:nowISO()});save();}treasureOverlay=true;render();soundEffect('chest');break;}case 'close-treasure':treasureOverlay=false;render();break;case 'open-stage':if(b.disabled)break;{const from=selectedLevelKey;clearTimer();openStage(b.dataset.key);if(from!==selectedLevelKey)requestAnimationFrame(()=>travelToNext(from));soundEffect('tap');}break;case 'choose-answer':if(answerResult==='correct'||answerResult==='timeout')break;answer=Number(b.dataset.option);answerResult=null;render();break;
 case 'boss-start':startBossChallenge();break;
 case 'speak-question':{const st=currentStage();if(st)speakText(taskFor(st,questionFor(st)).prompt,'zh-TW');break;}
 case 'speak':speakTask();break;
 case 'hint-text':{const hint=document.getElementById('spoken-hint');if(hint){hint.hidden=!hint.hidden;}break;}
 case 'digit':if(answerResult==='correct'||answerResult==='timeout')break;{const d=b.dataset.digit;if(d==='清除')taskState.typed='';else if(d==='⌫')taskState.typed=taskState.typed.slice(0,-1);else if(/^\d$/.test(d)&&taskState.typed.length<7)taskState.typed+=d;answerResult=null;updateTaskView();}break;
 case 'match-left':if(answerResult==='correct'||answerResult==='timeout')break;{const n=Number(b.dataset.index);if(!(n in taskState.matches))taskState.selectedLeft=n;updateTaskView();}break;
 case 'match-right':if(answerResult==='correct'||answerResult==='timeout')break;completeMatch(b.dataset.index);break;
 case 'add-token':if(answerResult==='correct'||answerResult==='timeout')break;{const n=Number(b.dataset.index);if(!taskState.tokens.includes(n))taskState.tokens.push(n);answerResult=null;updateTaskView();}break;
 case 'remove-token':if(answerResult==='correct'||answerResult==='timeout')break;{const n=Number(b.dataset.index);if(n>=0&&n<taskState.tokens.length)taskState.tokens.splice(n,1);answerResult=null;updateTaskView();}break;case 'submit-answer':submitQuiz();break;case 'retry-stage':{timedBossActive=false;const key=selectedLevelKey;clearTimer();resetTask();answer=-1;answerResult=null;treasureOverlay=false;openStage(key);notify('🔄 本關已重新開始，可以重新作答！');requestAnimationFrame(()=>{const target=document.querySelector('.mission-board')||document.querySelector('.question-stage14');target?.scrollIntoView({behavior:'smooth',block:'center'});target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});});break;}case 'next-stage':{const next=nextStageKey(),from=selectedLevelKey;if(next){answer=-1;answerResult=null;openStage(next);document.querySelector('.journey-card')?.scrollIntoView({behavior:'smooth',block:'center'});requestAnimationFrame(()=>travelToNext(from));soundEffect('tap');}break;}case 'practice-open':practicePick=b.dataset.key;practiceAnswer=-1;practiceFeedback=null;if(page!=='practice')page='practice';render();break;
 case 'practice-choice':if(practiceFeedback!==null)break;practiceAnswer=Number(b.dataset.option);render();break;
 case 'practice-submit':doPracticeAnswer();break;
 case 'practice-retry':practiceAnswer=-1;practiceFeedback=null;render();break;
 case 'practice-next':{const all=visibleQuestions(byChild(selectedChild)).filter(q=>(practiceFilterSubject==='all'||q.subject===practiceFilterSubject)&&(practiceFilterGrade==='all'||q.grade===practiceFilterGrade)&&(practiceFilterUnit==='all'||q.unit===practiceFilterUnit));const i=all.findIndex(q=>q.id===practicePick);usePractice(all[(i+1)%all.length]?.id);break;}
 case 'review-stage':{const subject=b.dataset.subject,key=b.dataset.key;selectedSubject=subject;page='quiz';clearTimer();openStage(key);break;}
 case 'question-add':openQuestionEditor(null);break;
 case 'question-edit':openQuestionEditor(store.customQuestions.find(q=>q.id===b.dataset.key));break;
 case 'question-delete':{const q=store.customQuestions.find(q=>q.id===b.dataset.key);if(q&&confirm('確定刪除此自訂題目？既有作答紀錄會保留，但不再顯示此題。'))mutate(()=>store.customQuestions=store.customQuestions.filter(x=>x.id!==q.id));break;}
 case 'batch-template':exportBatchTemplate();break;
 case 'batch-import':document.getElementById('batch-import-file').click();break;
 case 'sheet-start':beginWorksheet();break;
 case 'sheet-resume':{const sheet=store.worksheets.find(s=>s.id===which&&!s.completedAt&&s.childId===selectedChild);if(sheet){activeSheetId=sheet.id;sheetAnswer=-1;render();notify('已接續上次未完成的任務卷');}break;}
 case 'sheet-choice':sheetAnswer=Number(b.dataset.option);render();break;
 case 'sheet-submit':submitSheetAnswer();break;
 case 'sheet-new':activeSheetId='';sheetAnswer=-1;render();break;
 case 'sheet-abandon':{const sheet=activeWorksheet();if(sheet&&Object.keys(sheet.answers).length&&!sheet.completedAt&&!confirm('目前已作答的題目會保留在練習紀錄中，確定改選單元？'))break;activeSheetId='';sheetAnswer=-1;render();break;}
 case 'show-history':showHistory(which);break;case 'export':exportJSON();break;case 'import':document.getElementById('import-file').click();break;case 'reset-demo':if(confirm('確定還原示範資料？目前所有資料都會被清除且無法復原。')){clearTimer();store=seed();normalizeStore();selectedChild='c1';selectedSubject='math';selectedLevelKey='';page='home';mutate(()=>{});notify('已還原示範資料');}break;case 'clear-progress':if(confirm('確定清除所有孩子的作答紀錄與星星？')){clearTimer();mutate(()=>{store.progress=[];store.treasures=[];store.bossRecords=[];store.duels=[];store.practiceAttempts=[];store.worksheets=[];activeSheetId='';});notify('作答紀錄、任務卷與寶箱徽章已清除');}break;}});
el.addEventListener('dragstart',e=>{const tile=e.target.closest('[data-action="match-left"]');if(tile&&e.dataTransfer){taskState.selectedLeft=Number(tile.dataset.index);e.dataTransfer.setData('text/plain',tile.dataset.index);e.dataTransfer.effectAllowed='move';}});
el.addEventListener('dragover',e=>{if(e.target.closest('[data-action="match-right"]'))e.preventDefault();});
el.addEventListener('drop',e=>{const tile=e.target.closest('[data-action="match-right"]');if(tile){e.preventDefault();const source=e.dataTransfer?.getData('text/plain');if(source!==undefined&&source!=='')taskState.selectedLeft=Number(source);completeMatch(tile.dataset.index);}});
el.addEventListener('change',e=>{const t=e.target;if(t.dataset.permission){const c=byChild(t.dataset.child);if(!c)return;mutate(()=>{const arr=c.permissions[t.dataset.subject];if(t.checked&&!arr.includes(t.dataset.grade))arr.push(t.dataset.grade);if(!t.checked)c.permissions[t.dataset.subject]=arr.filter(g=>g!==t.dataset.grade);c.permissions[t.dataset.subject].sort((a,b)=>gradeIndex(a)-gradeIndex(b));});notify('學習權限已更新（本機）');}if('studyChild' in t.dataset){selectedChild=t.value;practicePick='';practiceAnswer=-1;practiceFeedback=null;activeSheetId='';sheetAnswer=-1;render();}
 if('practiceSubject' in t.dataset){practiceFilterSubject=t.value;practiceFilterUnit='all';practicePick='';render();}
 if('practiceGrade' in t.dataset){practiceFilterGrade=t.value;practiceFilterUnit='all';practicePick='';render();}
 if('practiceUnit' in t.dataset){practiceFilterUnit=t.value;practicePick='';render();}
 if('bankSubject' in t.dataset){bankFilterSubject=t.value;render();}
 if('bankGrade' in t.dataset){bankFilterGrade=t.value;render();}
 if('sheetSubject' in t.dataset){sheetFilterSubject=t.value;sheetFilterUnit='all';render();}
 if('sheetGrade' in t.dataset){sheetFilterGrade=t.value;sheetFilterUnit='all';render();}
 if('sheetUnit' in t.dataset){sheetFilterUnit=t.value;render();}
 if('sheetCount' in t.dataset){sheetCount=Number(t.value);render();}
 if('reportChild' in t.dataset){reportChild=t.value;render();}
 if('duelFirst' in t.dataset){duelPlayers[0]=t.value;duelRun=null;render();}
 if('duelSecond' in t.dataset){duelPlayers[1]=t.value;duelRun=null;render();}
 if('duelSubject' in t.dataset){duelSubject=t.value;duelRun=null;render();}
 if('duelGrade' in t.dataset){duelGrade=t.value;duelRun=null;render();}
 if('childGrade' in t.dataset){const kid=byChild(selectedChild);if(kid&&availableGrades(kid).includes(t.value)){timedBossActive=false;clearTimer();kid.challengeGrade=t.value;selectedLevelKey='';save();render();notify('已切換為 '+gradeLabel(t.value)+' 的挑戰');}}
 if('speechRate' in t.dataset){store.settings.speechRate=Number(t.value);save();render();notify('發音速度已調整');}
 if(t.dataset.daily){const c=byChild(t.dataset.daily);if(c)mutate(()=>c.dailyGoal=Number(t.value));}});
document.getElementById('import-file').addEventListener('change',e=>importJSON(e.target.files?.[0]));
document.getElementById('batch-import-file').addEventListener('change',e=>receiveBatchFile(e.target.files?.[0]));
render();
})();
