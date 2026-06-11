# Classical Chinese Helper - Image Generation Summary

## Task Overview
Add illustration images to each paragraph's translation section for all classical Chinese text articles.

## Completed Work

### 1. Data Model Updates
- Added `imagePrompt?: string` field to `Paragraph` interface in `src/data/types.ts`
- Added `imagePath?: string` field to `Paragraph` interface for storing generated image paths

### 2. UI Update
- Modified `src/pages/TextPage.tsx` to display images below translations
- Image display: `max-w-xs max-h-40 rounded border border-stone-200 object-cover`

### 3. Generated Images

| Article | Paragraphs | Status |
|---------|------------|--------|
| yong-xue (咏雪) | 2 | ✅ Complete |
| chen-tai-qiu (陈太丘与友期行) | 5 | ✅ Complete |
| lun-yu (论语十二章) | 12 | ⚠️ Only p1 generated |

### 4. Image Prompts Added
All 14 articles have `imagePrompt` fields added. See details below.

## Remaining Work

### Images Pending Generation (MiniMax MCP service unavailable)

#### lun-yu (论语十二章)
- lun-yu-p2 to lun-yu-p12

#### jie-zi-shu (诫子书) - 4 paragraphs
- jie-zi-shu-p1, p2, p3, p4

#### lang (狼) - 5 paragraphs
- lang-p1, p2, p3, p4, p5

#### chuan-jing-de-yi-ren (穿井得一人) - 4 paragraphs
- chuan-jing-de-yi-ren-p1, p2, p3, p4

#### qi-ren-you-tian (杞人忧天) - 6 paragraphs
- qi-ren-you-tian-p1, p2, p3, p4, p5, p6

#### sun-quan-quan-xue (孙权劝学) - 5 paragraphs
- sun-quan-quan-xue-p1, p2, p3, p4, p5

#### mu-lan-shi (木兰诗) - 6 paragraphs
- mu-lan-shi-p1, p2, p3, p4, p5, p6

#### mai-you-weng (卖油翁) - 3 paragraphs
- mai-you-weng-p1, p2, p3

#### lou-shi-ming (陋室铭) - 6 paragraphs
- lou-shi-ming-p1, p2, p3, p4, p5, p6

#### ai-lian-shuo (爱莲说) - 3 paragraphs
- ai-lian-shuo-p1, p2, p3

#### he-zhong-shi-shou (河中石兽) - 4 paragraphs
- he-zhong-shi-shou-p1, p2, p3, p4

#### tao-hua-yuan-ji (桃花源记) - 5 paragraphs
- tao-hua-yuan-ji-p1, p2, p3, p4, p5

#### yue-yang-lou-ji (岳阳楼记) - 5 paragraphs
- yue-yang-lou-ji-p1, p2, p3, p4, p5

## Image Prompt Reference

All prompts follow this pattern: "Classical Chinese scene description, traditional Chinese ink painting style"

### lun-yu prompts (remaining)
- p2: Zengzi self-reflecting night scene Chinese scholar moonlit
- p3: Confucius life stages from youth to old age growth wisdom progression traditional Chinese ink painting
- p4: Chinese scholar studying old books by candlelight gaining new insights traditional ink painting style
- p5: Learning thinking balance Chinese scholar reading contemplating harmony study reflection traditional ink painting
- p6: Yan Hui poor but happy in narrow alley bamboo food container simple life contentment traditional Chinese ink painting
- p7: Three levels learning wisdom staircase knowing loving delighting Chinese scholars ascending traditional ink painting
- p8: Confucius resting with arm as pillow gazing at clouds simple food clouds above carefree scholar countryside traditional Chinese ink painting style
- p9: Three travelers on road Confucius learning from companions observing strengths weaknesses country path scene traditional Chinese ink painting style
- p10: Confucius by flowing river time passing water flowing day night philosophical contemplation riverbank traditional Chinese ink painting style
- p11: Army general changeable but common person unshakeable will military force versus determined scholar traditional Chinese ink painting style
- p12: Zixia studying extensively with determination asking questions contemplating deeply wisdom and benevolence Chinese scholar traditional ink painting style

### jie-zi-shu prompts
- p1: Noble scholar cultivating virtue through tranquility and frugality meditation in peaceful garden setting simple living high aspirations traditional Chinese ink painting style
- p2: Learning requires tranquility talent comes from study Chinese scholar focused on books with aspiration scholarly dedication traditional Chinese ink painting style
- p3: Diligence versus laziness contrast energetic spirit versus reckless agitation Chinese scholar diligent versus idle figures traditional Chinese ink painting style
- p4: Time flowing like water youth fading fallen leaves and withered trees representing lost opportunities regretful scholar in poor cottage autumn scene passage of time traditional Chinese ink painting style

### lang prompts
- p1: Butcher returning home at dusk with empty basket two wolves following behind on country road twilight atmosphere tension and danger traditional Chinese ink painting style
- p2: Butcher throwing bones to wolves wolves still chasing despite bones given moonlight night scene escalating tension traditional Chinese ink painting style
- p3: Butcher trapped between two wolves near haystack ready with knife wolves staring intensely dramatic confrontation at night traditional Chinese ink painting style
- p4: Butcher killing wolves with knife one wolf feigning sleep another wolf digging tunnel dramatic battle scene traditional Chinese ink painting style
- p5: Two dead wolves defeated by clever butcher moral message about cleverness failing against wisdom triumphant aftermath scene traditional Chinese ink painting style

### chuan-jing-de-yi-ren prompts
- p1: Ding family digging well in ancient China villager drawing water from well misunderstanding about gaining person from well traditional Chinese ink painting style
- p2: Rumor spreading through town about well finding person people gossiping in marketplace news reaching the king ancient Chinese city scene traditional ink painting style
- p3: King messenger asking Ding family clarification that well gained labor not person from well court scene with king and servant traditional Chinese ink painting style
- p4: Wisdom of not spreading rumors versus hearsay misunderstanding contrast between truth and gossip scholarly reflection scene traditional Chinese ink painting style

### qi-ren-you-tian prompts
- p1: Worried man from Qixia kingdom looking anxiously at sky fearing heaven will fall sleepless and foodless from worry dramatic sky scene traditional Chinese ink painting style
- p2: Wise philosopher explaining sky is air to worried man teaching about atmosphere and breathing educational scene traditional Chinese ink painting style
- p3: Worried man questioning about sun moon stars falling pointing at sky worried dialogue scene traditional Chinese ink painting style
- p4: Philosopher explaining sun moon stars are luminous air even if falling cannot harm calm reassurance scene traditional Chinese ink painting style
- p5: Discussion about earth being solid ground people walk on philosopher pointing at ground explaining earth is stable outdoor scene with earth and sky traditional Chinese ink painting style
- p6: Both men happy and relieved after worry resolved relieved smiles and laughter harmonious ending scene traditional Chinese ink painting style

### sun-quan-quan-xue prompts
- p1: Sun Quan urging Lu Meng to study military leader in palace setting important official documents on desk learning discussion scene traditional Chinese ink painting style
- p2: Sun Quan explaining benefits of reading books despite busy duties showing personal example of learning wise leader teaching scene traditional Chinese ink painting style
- p3: Lu Meng studying diligently then Lu Su amazed at Xunyang seeing Lu Meng transformation and wisdom gained surprise and admiration scene traditional Chinese ink painting style
- p4: Lu Meng confidently responding to Lu Su about changed perspective three days apart looking at someone differently scholarly debate scene traditional Chinese ink painting style
- p5: Lu Su visiting and bowing to Lu Meng mother as sign of respect two scholars becoming friends and parting warm friendship scene traditional Chinese ink painting style

### mu-lan-shi prompts
- p1: Mulan weaving at loom sighing deeply military conscription notice arriving family worried about father with no sons ancient Chinese rural home scene traditional ink painting style
- p2: Mulan buying horse and equipment at markets departing at dawn past Yellow River marching through mountains soldier journey scene traditional Chinese ink painting style
- p3: Mulan in battle armor crossing fortress gates swiftly northern frontier military camp at night with armor shining in moonlight brave warrior woman soldier traditional Chinese ink painting style
- p4: Mulan honored by emperor in grand throne room receiving medals and rewards but declining official position asking only to return home palace scene traditional Chinese ink painting style
- p5: Mulan returning home family reunion taking off armor dressing in female clothes applying makeup mirror shocked male soldiers discovering Mulan is woman joyful homecoming scene traditional Chinese ink painting style
- p6: Two rabbits running together one male one female indistinguishable metaphor of Mulan hidden identity clever symbolism scene traditional Chinese ink painting style

### mai-you-weng prompts
- p1: Chen Yaoqing skilled archer shooting arrows in garden oil seller old man watching with slight nod prideful archer versus humble observer traditional Chinese ink painting style
- p2: Archer angry questioning oil seller oil seller explaining mastery through practice not talent heated debate between two men traditional Chinese ink painting style
- p3: Oil seller demonstrating skill pouring oil through coin hole into gourd without wetting coin skillful mastery revealed archer smiling and sending off oil seller traditional Chinese ink painting style

### lou-shi-ming prompts
- p1: Simple humble dwelling versus grandeur of mountain with immortal or dragon virtue over material appearance philosophical landscape traditional Chinese ink painting style
- p2: Simple humble room with scholar of noble character virtue fragrance filling space modest but dignified atmosphere traditional Chinese ink painting style
- p3: Moss green on steps grass verdant color entering through blinds natural beauty in simple surroundings serene peaceful humble dwelling scene traditional Chinese ink painting style
- p4: Scholarly gentlemen conversing in simple room educated refined company no common uneducated people intellectual elegant gathering scene traditional Chinese ink painting style
- p5: Scholar playing simple guqin reading Buddhist texts peaceful quiet room without worldly distractions or official documents free simple life traditional Chinese ink painting style
- p6: Comparison to Zhuge Liang thatched cottage and Yang Xiong pavilion Confucius quote about simplicity not vulgar historical references scholarly scene traditional Chinese ink painting style

### ai-lian-shuo prompts
- p1: Chrysanthemum loved by Tao Yuanming peony loved since Tang dynasty various beautiful flowers in pond and land settings comparison of flower preferences across eras traditional Chinese ink painting style
- p2: Lotus flower rising clean from muddy water pure and upright stem elegant and dignified distant admiration only not touching pond scene with lotus traditional Chinese ink painting style
- p3: Chrysanthemum as hermit flower peony as wealth flower lotus as noble gentleman three flowers symbolizing different personalities philosophical contemplation scene traditional Chinese ink painting style

### he-zhong-shi-shou prompts
- p1: Temple near river with collapsed gate two stone beast statues submerged in river monks searching in boats dragging iron rakes river landscape temple scene traditional Chinese ink painting style
- p2: Scholar explaining stone beasts sinking deeper in riverbed reasoning about heavy stone versus light sand academic lecture scene in temple traditional Chinese ink painting style
- p3: Old river soldier explaining correct upstream location of stone beasts water erosion creating vortex around stone pushing it upstream river engineering wisdom revealed traditional Chinese ink painting style
- p4: Moral wisdom about not judging without full knowledge two sides to every story scholar contemplating broader lessons philosophical reflection scene traditional Chinese ink painting style

### tao-hua-yuan-ji prompts
- p1: Fisherman rowing boat along stream discovering magical peach blossom forest pink petals falling scattered beautiful spring scenery entrance to utopia traditional Chinese ink painting style
- p2: Fisherman leaving boat entering dark cave narrow passage then emerging to beautiful hidden paradise valley transition from darkness to light discovery scene traditional Chinese ink painting style
- p3: Peaceful hidden valley utopia with orderly houses fertile fields beautiful ponds mulberry bamboo path between fields happy elderly and children idyllic community scene traditional Chinese ink painting style
- p4: Utopia villagers surprised seeing fisherman inviting him home for feast with wine and chicken warm hospitality scene traditional Chinese ink painting style
- p5: Villagers explaining they fled Qin dynasty wars to hide here isolated from outside world for generations unaware of later dynasties flashback historical scene traditional Chinese ink painting style

### yue-yang-lou-ji prompts
- p1: Teng Zijing exiled governor rebuilding Yueyang Tower grand tower restoration with scholars writing inscriptions political prosperity scene traditional Chinese ink painting style
- p2: Magnificent view of Dongting Lake from Yueyang Tower lake connecting to distant mountains and Yangtze River vast horizon scholars and poets gathering grand landscape scene traditional Chinese ink painting style
- p3: Gloomy scene Yueyang Tower in rainstorm dark clouds heavy rain wind howling waves crashing gloomy atmosphere sadness melancholy mood dramatic landscape traditional Chinese ink painting style
- p4: Bright spring scene at Yueyang Tower clear sunny weather calm lake reflecting sky white gulls flying golden fish swimming fragrant flowers peaceful joyful atmosphere traditional Chinese ink painting style
- p5: Fan Zhongyan contemplating noble character worrying about people before self serving nation with loyalty philosophical statesman at tower moral wisdom scene traditional Chinese ink painting style

## Next Steps

1. **Wait for MiniMax MCP service to recover**, then generate remaining images one by one
2. **Copy generated images** to `public/images/texts/` with naming convention `{article-id}-p{n}.jpg`
3. **Update data files** with `imagePath` field for each paragraph
4. **Verify images display correctly** in browser
5. **Review layout** - ensure image size doesn't overwhelm text (current: `max-w-xs max-h-40`)

## Technical Notes

- Image output directory: `public/images/texts/`
- Image URL path: `/images/texts/{filename}.jpg`
- Build command: `npm run build` (passes successfully)
- Dev server: `npm run dev` (running on port 5174)
