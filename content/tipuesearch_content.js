var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '個人簡介', 'text': '個人倉儲: https://github.com/40823129/cd2021 \n \n YT頻道: https://www.youtube.com/channel/UC3JWZoHd_cjY4DreQ4phLpw \n \n', 'tags': '', 'url': '個人簡介.html'}, {'title': 'supplement', 'text': '', 'tags': '', 'url': 'supplement.html'}, {'title': 'DroidCam\xa0 teaching', 'text': 'DroidCam turns Android phones into PC video cameras \n step1:在手機和電腦上分別下載應用程式\xa0  連結 \n step2:手機上會顯示的資訊\xa0 \xa0 \n \xa0 \xa0 \xa0 \n WiFi IP:這裡會有一行數字\nDroid Cam Port:4747\n\nIP Cam Access:\nhttps://192.這裡會有一行數字\nhttps://192.這裡會有一行數字 \n step3: \n \n \n 如果想把手機當麥克風收音，就要把 Audio 勾起來 \n 這樣就設定完成了 \n', 'tags': '', 'url': 'DroidCam\xa0 teaching.html'}, {'title': 'stage1', 'text': '組員: 40823129\xa0 姓名:汪昱呈 倉儲: 40823129倉儲 \n 組員: 40823149\xa0 姓名:趙偉辰 倉儲: 40823149倉儲 \n 小組倉儲: 小組倉儲 \n', 'tags': '', 'url': 'stage1.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'W1', 'text': '討論主題,以及討論未來幾周需要達成的進度 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '零件繪製 \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': 'CoppeliaSim模擬及修改 \n \n \n \n \n \n \n 修改輪胎的部分 \n \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': 'stage1-ag7 PDF \n', 'tags': '', 'url': 'W4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'W5', 'text': '組員: \n 40823117\xa0 潘奕丞\xa0 \xa0\xa0 40823117 \n 40823122\xa0 吳家凱\xa0 \xa0\xa0 40823122 \n 40823129\xa0 汪昱呈\xa0 \xa0\xa0 40823129 \n 40823149\xa0 趙偉辰\xa0 \xa0\xa0 40823149 \n 分工項目: \n 40823122\xa0 吳家凱\xa0 負責 CoppeliaSim 模擬 \n 40823117\xa0 潘奕丞\xa0 \xa040823129\xa0 汪昱呈\xa0 \xa040823149\xa0 趙偉辰\xa0 負責 機構設計 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '個人工作: \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'coppliasim 模擬', 'text': 'stage2-ag7(機械狗)--- coppeliasim模擬影片 \n', 'tags': '', 'url': 'coppliasim 模擬.html'}, {'title': 'Heroku', 'text': '1.利用學校的gm帳號建立\xa0\xa0 heroku\xa0 帳號 \n 2.建立\xa0Heroku app \n 3.從\xa0\xa0 http://a.kmol.info:88/heroku.7z \xa0下載 Heroku cli 程式檔案,解至隨身碟 Y: \n 4.修改\xa0 start.bat 中的內容 ,修改完後確認並重新啟動 \n \n 5.測試能否在命令列中執行 heroku.exe, 輸入 heroku version,如果有回應所使用的版本代表上述路徑設定成功 \n 6.proxy的設定,在start.bat當中加入 \n REM for heroku login\nset HTTP_PROXY=http://[2001:288:6004:17::53]:3128\nset HTTPS_PROXY=http://[2001:288:6004:17::53]:3128 \n 7. 利用 Heroku 同步 Github Pages 上的網站內容 \n 8. 使用 git push heroku 就可以將改版內容推送到對應的 Heroku app 倉儲 \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': '程式碼 \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as hj:\n    # readlines will read into the whole line and put into list format \n    # has \\n at the end of each line \n    data = hj.readlines()\n    A= [a.replace(\'4823122\',\'40823122\') for a in data]\n    #replace(\'被取代的\',\'修改成你要的\')\n    #把這串replace (\'4823122\',\'40823122\')命名為a,然後for-loop到data中修改\n    B = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in A]\n    #因為有一組只有6人,所以用 replace 把空位刪除\n    #(\\t\\t代表一個)\n    D = [b.replace(\'_\',\'-\') for b in B]\n    #把_替換成-\n    #print(D)\n#print(len(D))\n#利用len()函式來得出list中有多少元素\nfor i in range(len(data)):\n    #以range為len(data)=6進行迴圈,變數為i\n    group = D[i].rstrip("\\n").split("\\t")\n    #取data list中的第i項進行處理,去除元素中的\\n,並利用\\n為依據,分割元素成為新串列.\n    print(\'<p>\'+group[0]+\'|<a href="https://\'+group[1]+\'.github.io/\'+group[0]+\'">網站</a>|<a href="https://github.com/\'+group[2]+\'/\'+group[0]+\'">倉儲</a></p>\')\n# the following will use group data to generate needed html\n \n    for j in range(2,18,2):\n        #以2為起始每次加2加到16,因為18不算,也就是執行迴圈8次.\n        try:\n            print(\'<p>\'+group[j]+\'|Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\'|Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a></p>\')\n        except:\n            continue#跑到第三組時,會出現錯誤所以使用continue強制執行\n             \n 成果 \n stage3-ag1| 網站 | 倉儲 \n 40823131|Website: 40823131 |Repository: 40823131 \n a40823112|Website: a40823112 |Repository: a40823112 \n 40823123|Website: 40823123 |Repository: 40823123 \n 40823145|Website: 40823145 |Repository: 40823145 \n 40823136|Website: 40823136 |Repository: 40823136 \n 40823109|Website: 40823109 |Repository: 40823109 \n 40823116|Website: 40823116 |Repository: 40823116 \n 40823108|Website: 40823108 |Repository: 40823108 \n stage3-ag2| 網站 | 倉儲 \n 40823151|Website: 40823151 |Repository: 40823151 \n 40623121|Website: 40623121 |Repository: 40623121 \n 40871106|Website: 40871106 |Repository: 40871106 \n 40823102|Website: 40823102 |Repository: 40823102 \n 40823104|Website: 40823104 |Repository: 40823104 \n 40823106|Website: 40823106 |Repository: 40823106 \n 40823101|Website: 40823101 |Repository: 40823101 \n 40823132|Website: 40823132 |Repository: 40823132 \n stage3-ag3| 網站 | 倉儲 \n 40823119|Website: 40823119 |Repository: 40823119 \n 40823150|Website: 40823150 |Repository: 40823150 \n 40823103|Website: 40823103 |Repository: 40823103 \n 40823107|Website: 40823107 |Repository: 40823107 \n 40523252|Website: 40523252 |Repository: 40523252 \n 40823154|Website: 40823154 |Repository: 40823154 \n stage3-ag4| 網站 | 倉儲 \n 40823142|Website: 40823142 |Repository: 40823142 \n 40823144|Website: 40823144 |Repository: 40823144 \n 40823127|Website: 40823127 |Repository: 40823127 \n 40823148|Website: 40823148 |Repository: 40823148 \n 40823121|Website: 40823121 |Repository: 40823121 \n 40823135|Website: 40823135 |Repository: 40823135 \n 40823114|Website: 40823114 |Repository: 40823114 \n 40823146|Website: 40823146 |Repository: 40823146 \n stage3-ag5| 網站 | 倉儲 \n 40823111|Website: 40823111 |Repository: 40823111 \n 40823115|Website: 40823115 |Repository: 40823115 \n 40823128|Website: 40823128 |Repository: 40823128 \n 40823120|Website: 40823120 |Repository: 40823120 \n 40823140|Website: 40823140 |Repository: 40823140 \n 40823124|Website: 40823124 |Repository: 40823124 \n 40823139|Website: 40823139 |Repository: 40823139 \n 40823126|Website: 40823126 |Repository: 40823126 \n stage3-ag6| 網站 | 倉儲 \n 40823152|Website: 40823152 |Repository: 40823152 \n 40823110|Website: 40823110 |Repository: 40823110 \n 40823122|Website: 40823122 |Repository: 40823122 \n 40823125|Website: 40823125 |Repository: 40823125 \n 40823117|Website: 40823117 |Repository: 40823117 \n 40823129|Website: 40823129 |Repository: 40823129 \n 40823149|Website: 40823149 |Repository: 40823149 \n 40823153|Website: 40823153 |Repository: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': 'coppeliasim版本需用4.2.0版,並透過以下程式可遠端操作小車運作 \n \n \n \n \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'W11', 'text': 'cmsimde沒有綠勾,如何除錯 \n STEP \n 1.把stage3-ag6的.gitmodules 刪掉 \n 2.git add .gitmodules \n 3.git rm --cached cmsimde \n 4.直接進到 stage3-ag6 /.git檔/modules/刪掉cmsimde資料夾 \n 5.git commit -m "cmsimde" \n 6.直接進到 stage3-ag6 刪掉cmsimde資料夾 \n 7.git submodule add https://github.com/mdecourse/cmsimde \n 8.git add . \n 9.git commit -m "name" \n 10.git push \n 之後確認是否成功 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '小組meeting討論分工項目 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Robodk', 'text': '影片(程式碼編輯及模擬) \n \n \n', 'tags': '', 'url': 'Robodk.html'}, {'title': 'gogs', 'text': '1.從 \xa0 這裡 \xa0進入到以下的畫面,點"+"興建倉儲 "cd2021"(需對應在github的倉儲名稱) \n \n \n 2.之後到cmd(小黑)裡輸入 \n git remote add fossil http://fossil.kmol.info:3000/學號/cd2021.git\n \n \n 3.推送git push fossil \n 4.設定ssh(與github和gitlab相同) \n \n \n 5.設定putty \n \n \n \n \n', 'tags': '', 'url': 'gogs.html'}, {'title': 'W14-W15', 'text': "影片字幕翻譯: \n 第一部: \n Inverse kinematics for a 2-joint robot arm using geometry \n \n We saw this simple two-link robot in the previous lecture about forward kinematics. \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機構 。 \n The tooltip pose of the robot is simply described by two numbers, coordinates x and y is relative to the world coordinate system. \n 該機構的姿態由兩個簡單的數字描述，即相對於絕對坐標系的坐標 x 和 y 。 \n So, the problem here is that given x and y, we have to determine the connecting angle Q1 and Q2. \n 所以，這裡的問題是給定 x 和 y，我們要確定連接角 Q1和Q2. \n The solution we will follow in this section is geometric one. \n 我們將在本節中遵循的解決方案是幾何解決方案。 \n We're going to start with a simple piece of construction. \n 我們將從一個簡單的結構開始。 \n We're going to overlay the red triangle on top of our robot. \n 我們將在我們的機器人頂部覆蓋紅色三角形。 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y,horizontal width is x. \n 我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x。 \n And, using Pythagoras theorem, we can write thagoras r squared equals x squared plus y squared. \n 並且，使用畢達哥拉斯定理，我們可以寫出 thagoras r 平方等於 x 平方加 y 平方。 \n So far.so easy \n 到目前爲止，很容易 \n Now, we're going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 現在，我們將查看此處以紅色突出顯示的三角形，我們要確定角度 alpha。 \n In order to do that, we need to use the cosine rule. \n 為了做到這一點，我們需要使用餘弦規則。 \n And, if you're a little rusty on the cosine rule, here is a bit of a refresher. \n 而且，如果你對餘弦規則有點不熟悉，這裡有一點複習。 \n We have an arbitrary triangle. \n 我們有一個任意三角形。 \n We don't have to have any right angles in it and we're going to label the length of this edge as A and the angle opposite that edge, we're going to label as little a. \n 我們不必在其中有任何直角，我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。 \n And, we do the same for this edge and this angle, and this edge and this angle. \n 並且，我們對這條邊和這個角，以及這條邊和這個角做同樣的事情。 \n So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c. \n 因此，所有邊都標記為大寫字母 A、B 和 C，角標記為小 a、小 b 和小 c。 \n So, the cosine rule is simply this relationship here. \n 所以，餘弦規則就是這裡的這種關係。 \n It's a bit like Pythagoras' theorem except for this extra term on the end with the cos a in it. \n 它有點像畢達哥拉斯的定理，除了最後一個額外的術語，其中有 cos a。 \n Now, let's apply the cosine rule to the particular triangle we looked at a moment rul ago. \n 現在，讓我們將餘弦規則應用於我們剛才看到的特定三角形。 \n It's pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 \n We can isolate the term cos alpha which gives us the angle alpha that we're interested in. \n 我們可以分離出術語 cos alpha，它為我們提供了我們感興趣的角度 alpha。 \n And, it's defined in terms of the constant link lengths, A1 and A2 and the position of the end effector,x and y. \n 而且，它是根據恆定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 \n We can write this simple relationship between the angles alpha and Q2. \n 我們可以寫出角度 alpha 和 Q2 之間的這種簡單關係。 \n And, we know from the shape of the cosine function that cos of Q2 must be equal to negative of cos alpha. \n 而且，我們從餘弦函數的形狀知道，Q2 的 cos 必須等於 cos alpha 的負值。 \n This time, let's just write an expression for the cosine of the joined angle Q2. \n 這一次，讓我們為連接角 Q2 的餘弦寫一個表達式。 \n Now, we're going to draw yet another red triangle and we're going apply some simple trigonometry here. \n 現在，我們將繪製另一個紅色三角形，並在此處應用一些簡單的三角函數。 \n If we know Q2, then we know this length and this length of the red triangle. \n 如果我們知道 Q2，那麼我們就知道這個長度和這個紅色三角形的長度。 \n We can write this relationship for the sine of the joined angle Q2. \n 我們可以為連接角 Q2 的正弦寫出這種關係。 \n Now, we can consider this bigger triangle whose angle is beta and this side length of the triangle is given here in blue. \n 現在，我們可以考慮這個更大的三角形，它的角是β，三角形的這條邊長在這裡用藍色給出。 \n And, the length of the other side of the triangle is this. \n 並且，三角形另一邊的長度是這個。 \n So, now we can write an expression for the angle beta in terms of these parameters here. \n 所以，現在我們可以在此處根據這些參數編寫角度 beta 的表達式。 \n Going back to the red triangle that we drew earlier, we can establish a relationship between Q1 and the angle beta. \n 回到我們之前畫的紅色三角形，我們可以建立Q1和角度β之間的關係。 \n Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y. \n 引入另一個角度，這個伽馬，我們可以寫出角度伽馬和工具提示坐標 x 和 y 之間的關係。 \n Now, we can write a simple relationship between the angles that we've constructed, gamma and beta and the joined angle we're interested in which is Q1. \n 現在，我們可以在我們構建的角度 gamma 和 beta 與我們感興趣的連接角度 Q1 之間寫出一個簡單的關係。 \n And, the total relationship looks something like this. \n 而且，整個關係看起來像這樣。 \n Quite a complex relationship, it gives us the angle of joined one, that's Q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it's also a function of the second joint angle, Q2. \n 相當複雜的關係，它為我們提供了連接的角度，即根據末端執行器坐標 y 和 x 的 Q1，以及一系列常量 a1 和 a2，它也是第二個關節角度 Q2 的函數。 \n So, let's summarize what it is that we have derived here.1 \n 所以，讓我們總結一下我們在這裡得出的結論。1 \n We have an expression for the cosine of Q2 and we have an expression for Q1. \n 我們有 Q2 的餘弦表達式和 Q1 的表達式。 \n Now, the cosine function is symmetrical about 0. \n 現在，餘弦函數關於 0 對稱。 \n So, if we know the value of the cosine of Q2, then there are two possible solutions, a positive angle and a negative angle. \n 所以，如果我們知道 Q2 的餘弦值，那麼有兩種可能的解，一個正角和一個負角。 \n We're going to explicitly choose the positive angle, which means that I can write this expression here. \n 我們將明確選擇正角，這意味著我可以在這裡寫這個表達式。 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在，我們有了這個雙連桿機器人的逆運動學解決方案。 \n We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有兩個連接角 Q1 和 Q2 的表達式，根據末端執行器姿勢 x 和 y 以及一系列常數。 \n You notice that the two equations are not independent. \n 你注意到這兩個方程不是獨立的。 \n The equation for Q1, in fact, depends on the solution for Q2. \n 事實上，Q1 的方程取決於 Q2 的解。 \n In this case, Q2 is negative and we're going to write the solution for Q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，Q2 是負數，我們將在反餘弦前用負號編寫 Q2 的解。 \n Now, we need to solve for Q1, so we're going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x. \n 現在，我們需要求解 Q1，因此我們將介紹這個特定的紅色三角形、我們之前求解的角度 beta 以及根據 y 和 x 定義的角度 gamma。 \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. \n q1、ɣ和β之間的關西，和之前求的不同。 \n There’s a change of sign involved. \n 涉及到符號的變化。 \n Then, we can substitute all that previous equation and come up with this expression for q1. \n 然後我們可代換之前所有等式，並求得此q1方程式。 \n Again, there is a change of sign here. \n 同樣，這裡的符號發生了變化。 \n Previously, this was a negative sign. \n 先前，這是個負號。 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where q2 is negative. \n 這是雙連桿機構在此逆向運動學的總形式，其中q2為負。 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們比較兩個解決方案，q2為正和q2為負的情況。 \n 從影片中的內容得知: \n \n 第二部: \n Inverse kinematics for a 2-joint robot arm using algebra \n \n Here we have the same two link robot as we just looked at but this time we're going tosolve it using an analytical approach , that is we're going to rely much more on algebra ,particular linear algebra rather than geometry . \n 這裡我們有與我們相同的兩個鏈接機器人只是看著，但這次我們要使用分析方法解決它，即我們是否會更多地依賴代數，特定的線性代數而不是幾何。 \n We have an expression E , which is the homogeneous transformation which represents the pose of the robots endefector and we looked at this in the last lecture , we can write the endefector pose as a sequence of elementary homogeneous transformations . \n 我們有一個表達式 E，它是表示機器人 endefector 位置的齊次變換，我們在上一課中看到了這一點， 我們可以將 endefector 位置寫成一系列基本齊次變換。 \n A rotation by Q1 , a translation along the X direction by A1 , a rotation by Q2 and then a translation in the X direction by A2 . \n Q1 旋轉，A1 沿 X 方向平移，Q2 旋轉，然後 A2 沿 X 方向平移。 \n If I expand this out , multiply all the transformations together , I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot's endefector. \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式 E ;它是一個三乘三的齊次變換矩陣，表示機械手臂的最終的位置。 \n Now for this particular two link robot , we are only interested in the position of its endefector , it's X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I'm going to copy those out . \n 現在對於這個特殊的兩連桿機器人，我們只對它的最終位置感興趣，與它有關的是 X 和 Y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來。 \n So here again is our expression for X and Y and what we're going to do is a fairly common trick , we're going to square and add these two equations and I get a relationship that looks like this . \n 所以這裡又是我們對 X 和 Y 的表達式，我們要做的是一個相當常見的技巧，我們要將它平方並將這兩個方程相加，我得到一個看起來像這樣的關係式。 \n Now I can solve for the joint angle Q2 in terms of the endefector pose X and Y and the robot's constants A1 and A2. \n 現在我可以根據最終位置X 和 Y 以及機器人的常數 A1 和 A2 來求解關節角度 Q2。 \n Now what I'm going to do is apply the sum of angles identity . \n 現在我要做的是應用角度之和的特性。 \n I'm going to expand these terms, sine of Q1 plus Q2 or cos of Q1 plus Q2 and to make life a little bit easier, I'm going to make some substations, so where ever I had cos Q2, I'm going to write C2 and where ever I had sine Q2, I'm going to write S2. \n 我將展開這些項，Q1 的正弦加 Q2 或 Q1 的餘弦加 Q2，為了讓生活更輕鬆一點，我將建立一些分部，所以只要有 cos Q2，我會將其取代為C2並且在有正弦Q2的地方，我會將其取代為S2。 \n It's a fairly common shorthand when people are looking at robot kinematic equations. \n 當人們解決機械手臂運動學方程式時，這是一個相當常見的快速記法。 \n And here are the equations after making those substitutions. \n 這是進行替換後的方程式。 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程式，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個眾所皆知的解決方案。 \n So I'm going to consider just one of the equations, the equation for Y and using our well known identity and it's solution, I can determine the values for the variables little a, little b and little c and once l've determined those, then I can just write down the solution for Q1, which x is the equivalent of theta in this particular case. \n 所以我將只考慮其中一個方程，Y 的方程，並使用我們眾所周知的恆等式和它的解，我可以確定變量小 a、小 b 和小 c 的值，一旦我確定了這些，然後我可以寫下 Q1 的解決方程，在這種特殊情況下，x 相當於 \xa0 θ 。 \n Here again is our expression for Q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squared plus Y squared is equal to this particular complex expression. \n 這裡再次是我們對 Q1 的表達，從上一張幻燈片複製過來，我們可能還記得在我們早期的說明中，確定了這種特殊關係； X 平方加 Y 平方等於這個特定的複雜表達式。 \n So I can substitute that in and do some simplification and I end up with this slightly less complex expression for Q1. \n 因此，我可以將其替換並進行一些簡化，最終得到 Q1 的這個稍微不那麼複雜的表達式。 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中遵循幾何方法得到的表達式一樣 。 \n 從影片的內容可得知: \n \n \n \n \n", 'tags': '', 'url': 'W14-W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': 'Onshape 零組件繪製', 'text': 'onshape零件連結: 底座 \xa0  arm 1   arm 2 \xa0  軸 \xa0 \n onshape組合件連結:  組合圖 \n 零件繪製影片: \n \n \n \n \n MTB robot組立影片: \n \n \n', 'tags': '', 'url': 'Onshape 零組件繪製.html'}]};