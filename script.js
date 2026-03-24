// ===== MULTI-LANGUAGE SYSTEM =====
let currentLang = 'ar';
const translations = {
    ar: {
        dir: 'rtl',
        nav_map: 'الخريطة',
        nav_transformation: 'التحول',
        nav_legacy: 'الإرث',
        nav_eras: 'الحقب',
        era_ancient: 'القديمة',
        era_transitional: 'الوسطى',
        era_modern: 'الحديثة',
        search_placeholder: 'بحث...',
        units_label: 'الوحدات:',
        active_site_label: 'الموقع النشط:',
        protocol_label: 'البروتوكول:',
        ancient_protocol: 'القديم',
        transitional_protocol: 'الوسيط',
        modern_protocol: 'الحديث',
        hero_summary: 'التطور التاريخي للتقسيم الإداري المصري',
        hero_title_html: 'من <em>الأقاليم</em> إلى المحافظات',
        hero_title_text: 'من الأقاليم إلى المحافظات',
        hero_intro: 'رحلة تفاعلية فاخرة عبر ٥٠٠٠ عام من التاريخ المصري. من الأقاليم الفرعونية الـ ٤٢ إلى المحافظات الحديثة الـ ٢٧، استكشف كيف تغيرت الجغرافيا الإدارية مع تغير العصور.',
        hero_btn_map: 'استكشف الخريطة',
        hero_btn_trans: 'تعرف على التحول',
        hero_secure: 'مؤمن',
        hero_center: 'أطلس مصر',
        logo_text: 'أطلس مصر',
        footer_connect: 'تواصل مع المطور',
        footer_sources: 'المصادر',
        footer_privacy: 'الخصوصية',
        footer_copy: '© ٢٠٢٦ أطلس مصر الرقمي — تطوير أدهم الديب',
        layer_panel_title: 'تخصيص الخريطة',
        layer_era_title: 'الحقبة الإدارية',
        layer_ancient: 'مصر القديمة (٤٢ إقليماً)',
        layer_transitional: 'العصر الوسيط (ولايات)',
        layer_modern: 'مصر الحديثة (٢٧ محافظة)',
        layer_data_title: 'بيانات إضافية',
        layer_sites: 'المواقع الأثرية الرئيسية',
        layer_routes: 'طرق التجارة القديمة',
        layer_labels: 'إظهار المسميات',
        layer_theme_title: 'نمط الخريطة',
        layer_theme_parchment: 'تاريخي',
        layer_theme_satellite: 'قمر صناعي',
        layer_theme_minimal: 'بسيط',
        layer_opacity_title: 'شفافية الحدود',
        welcome_title: 'مرحباً بك في أطلس مصر التاريخي',
        welcome_desc: 'اكتشف كيف تطورت المحافظات والأقاليم المصرية عبر العصور في رحلة تفاعلية فريدة.',
        welcome_badge: 'بروتوكول جالا v2.5',
        protocol_label: 'دليل النظام',
        btn_start: 'ابدأ الرحلة',
        detail_overview: 'نظرة عامة',
        detail_capital: 'العاصمة',
        detail_population: 'السياق السكاني',
        detail_status: 'المكانة الإدارية',
        detail_ruler: 'الحاكم/الراعي',
        detail_period: 'الحقبة',
        detail_monuments: 'المواقع الأثرية',
        detail_history_title: 'السجل التاريخي',
        detail_timeline_title: 'أحداث بارزة',
        comparison_title: 'محلل التباين الاستراتيجي',
        vs: 'ضد',
        winner_label: 'الأوسع نفوذاً',
        analysis_verdict: 'التحليل النهائي',
        close: 'إغلاق',
        credits: 'تطوير أدهم الديب',
        legacy_title: 'إرثٌ يعيد تعريف الحاضر',
        stat_years: 'عام من الثبات الإداري',
        stat_regions: 'إقليماً فرعونياً تاريخياً',
        pillars_title: 'أعمدة الأقاليم التاريخية',
        geo_nile: '🏞 وادي النيل',
        geo_delta: '🌾 الدلتا',
        geo_desert: '🏜 صحراوية',
        geo_coastal: '🌊 ساحلية',
        geo_heritage: '⭐ تراث غني',
        tooltip_zoom_in: 'تكبير العرض',
        tooltip_zoom_out: 'تصغير العرض',
        tooltip_layers: 'إعدادات الطبقات',
        tooltip_compare: 'بِدء المقارنة',
        tooltip_help: 'طلب المساعدة',
        journey_eyebrow: 'التحولات الجيوإدارية',
        journey_title: 'سجل النُّظُم الحاكمة للأرض',
        journey_desc: 'ثلاثة آلاف عام من العبقرية الإدارية، جسدت انتقال مصر من التكوين العضوي للوادي إلى نموذج الجمهورية الرقمية الحديثة التي تعانق صحراءها.',
        ancient_bg_text: '٣٠٠٠<br>ق.م',
        ancient_tag: 'العصر الفرعوني',
        ancient_years: '٣٠٠٠ ق.م — ٣٠ ق.م',
        ancient_title: 'نظام الأقاليم',
        ancient_subtitle: 'التقسيم العضوي للنيل',
        ancient_desc: 'كان الإقليم يمثل اللبنة الأساسية للحياة والتنظيم. نشأت الأقاليم كممالك زراعية صغيرة، ثم توحدت تحت لواء الفرعون والديوان الملكي. تميزت باللامركزية الجغرافية مع مركزية سياسية مطلقة، حيث تولت الأقاليم صيانة سدود الفيضان وجباية الغلال.',
        ancient_stat_1_val: '٤٢', ancient_stat_1_lbl: 'إقليماً مستقلاً',
        ancient_stat_2_val: 'منف', ancient_stat_2_lbl: 'أول عاصمة',
        ancient_stat_3_val: 'ماعت', ancient_stat_3_lbl: 'قانون النظام',
        trans_bg_text: '٦٤١<br>م',
        trans_tag: 'عصر المركزية',
        trans_years: '٦٤١ م — ١٩٥٢ م',
        trans_title: 'الكور والمديريات',
        trans_subtitle: 'التحول الديموغرافي',
        trans_desc: 'انتقلت مصر نحو مؤسسية بيروقراطية معقدة لتعميق سيطرة الدولة. دمجت الأقاليم المتفرقة إلى "أعمال" ثم تطورت لتصبح "مديريات" كبرى في عهد محمد علي الذي اهتم بالمسح العقاري التفصيلي وبناء منظومة ري صلبة لتنظيم الخراج والتجنيد.',
        trans_stat_1_val: '١٤', trans_stat_1_lbl: 'مديرية رئيسية',
        trans_stat_2_val: 'الفسطاط', trans_stat_2_lbl: 'مركز التأسيس',
        trans_stat_3_val: 'اللوائح', trans_stat_3_lbl: 'دستور الإدارة',
        modern_bg_text: '٢٠٢٦<br>م',
        modern_tag: 'الجمهورية الجديدة',
        modern_years: '١٩٥٢ م — ٢٠٢٦ م',
        modern_title: 'الحوكمة الرقمية',
        modern_subtitle: 'تخطيط المستقبل',
        modern_desc: 'خروج جذري من وادي النيل الضيق نحو التخطيط القومي الشامل. اعتمدت الدولة حدوداً إدارية جديدة ترتكز على المدن الذكية من الجيل الرابع، وتوسعات الطرق القومية، وقواعد بيانات ضخمة تضمن حوكمة دقيقة ومستدامة للتنمية.',
        modern_stat_1_val: '٢٧', modern_stat_1_lbl: 'محافظة بمقاييس حديثة',
        modern_stat_2_val: 'الإدارية', modern_stat_2_lbl: 'العاصمة الذكية',
        modern_stat_2_val: 'الإدارية', modern_stat_2_lbl: 'العاصمة الذكية',
        modern_stat_3_val: 'الرقمية', modern_stat_3_lbl: 'آلية صنع القرار',
        compass_n: 'ش', compass_e: 'ق', compass_s: 'ج', compass_w: 'غ',
        footer_nav_title: 'الملاحة المركزية',
        footer_link_1: '١. الخريطة التفاعلية',
        footer_link_2: '٢. نماذج التحول',
        footer_link_3: '٣. الأثر المصري',
        footer_link_4: '٤. أعمدة الأقاليم',
        footer_timeline_title: 'الجدول الزمني',
        footer_era_1: 'ق.م مصر القديمة',
        footer_era_2: 'م العصور الوسطى',
        footer_era_3: '٢٠٢٦ العصر الحديث',
        footer_doc_title: 'التوثيق الرقمي',
        footer_doc_1: '◎ منهجية البحث',
        footer_doc_2: '◎ دليل الرموز الهيروغليفية',
        footer_doc_3: '◎ سجل التغييرات',
        footer_refs_title: 'المصادر المعتمدة',
        ref_1_auth: 'جمال حمدان',
        ref_1_work: 'شخصية مصر — دراسة في عبقرية المكان',
        ref_2_auth: 'سليم حسن',
        ref_2_work: 'موسوعة مصر القديمة (المجلد الأول)',
        footer_vision_title: 'الرؤية التاريخية',
        footer_vision_proclamation: 'مصر ليست مجرد جغرافيا، بل هي التاريخ متجسداً في ملامح الأرض وعبقرية النيل؛ رحلة أبدية من الحجر إلى الروح',
        footer_vision_seal: 'سجل الخلود',
        footer_clock_label: 'الوقت الحالي',
        footer_research_label: 'التوثيق التاريخي',
        footer_research_name: 'أقاليم مصر القديمة',
        footer_dev_tag: 'المطور الرئيسي',
        footer_dev_name: 'أدهم الديب',
        footer_dev_desc: 'مصمم تجربة مستخدم ومهندس حلول تقنية متخصص في رقمنة التراث.',
        footer_dev_btn: 'زيارة الملف الشخصي',
        legacy_bg: 'الإرث الإداري',
        legacy_bg_1: 'عبقرية المكان',
        legacy_bg_2: 'أصول الحكم',
        legacy_eyebrow: 'الأثر المستدام',
        legacy_text: 'لم يكن التقسيم الإداري المصري مجرد خطوط على خريطة، بل كان تنظيماً حيوياً يربط بين قدسية النيل واحتياجات الإنسان. كل إقليم كان يمثل وحدة اقتصادية واجتماعية متكاملة تساهم في بناء أقدم دولة في التاريخ.',
        blueprint_label: 'نظام سبات (S\'put)',
        blueprint_title: 'منظومة السيادة والري',
        blueprint_desc: 'أول تنظيم إداري في التاريخ يربط توزيع الموارد بفيضان النيل، مما أسس لاستقرار الدولة المصرية لآلاف السنين.',
        pillars_bg: 'أعمدة الحضارة',
        pillars_bg_1: 'سجل السيادة',
        pillars_bg_2: 'أقاليم النيل',
        pillars_eyebrow: 'سجل السيادة',
        pillar_1_tag: 'الإقليم الرابع', pillar_1_name: 'طيبة', pillar_1_desc: 'عاصمة الإمبراطورية ومركز الحكم الديني الأكثر قدسية في التاريخ المصري القديم.', pillar_1_era: 'الدولة الحديثة', pillar_1_loc: 'الأقصر',
        pillar_2_tag: 'الإقليم الأول', pillar_2_name: 'منف', pillar_2_desc: 'أول عاصمة لمصر الموحدة، ميزان الأرضين ورمز الوحدة والسيادة المركزية.', pillar_2_era: 'الدولة القديمة', pillar_2_loc: 'الجيزة',
        pillar_3_tag: 'الإقليم الثاني', pillar_3_name: 'إدفو', pillar_3_desc: 'معقل عبادة الصقر حورس، وحارس البوابة الجنوبية للدولة المصرية التاريخية.', pillar_3_era: 'عبر العصور', pillar_3_loc: 'أسوان',
        pillar_4_tag: 'الإقليم الخامس', pillar_4_name: 'صا الحجر', pillar_4_desc: 'مركز الحكمة والدبلوماسية في قلب الدلتا، ومقر الأسرة السادسة والعشرين.', pillar_4_era: 'العصر المتأخر', pillar_4_loc: 'الغربية',
        pillar_5_tag: 'الإقليم الحادي عشر', pillar_5_name: 'تل المقدام', pillar_5_desc: 'مدينة الأسود ومركز القوة العسكرية في شرق الدلتا عبر التاريخ العسكري.', pillar_5_era: 'العصر الانتقالي', pillar_5_loc: 'الدقهلية',
        pillar_6_tag: 'الإقليم الثامن', pillar_6_name: 'أبيدوس', pillar_6_desc: 'المدينة المقدسة ومركز عبادة أوزير، ومكان ارتباط الأرض بالعالم الآخر.', pillar_6_era: 'ما قبل الأسرات', pillar_6_loc: 'سوهاج',
        feature_1_title: 'ابحث:', feature_1_desc: 'استخدم شريط البحث للعثور على أي مدينة أو محافظة.',
        feature_2_title: 'تنقل عبر الزمن:', feature_2_desc: 'استخدم ازرار الحقب أو شريط الزمن لتغيير العصر.',
        feature_3_title: 'استكشف:', feature_3_desc: 'انقر على أي منطقة على الخريطة لعرض تفاصيلها التاريخية.',
        feature_4_title: 'قارن:', feature_4_desc: 'فعل "وضع المقارنة" لاختيار منطقتين ومقارنتهم.',
        here_bubble: 'استكشف هنا!',
        bot_help: 'تحتاج مساعدة؟',
        highlight_ancient: 'العاصمة القديمة',
        highlight_trans: 'المركز الإداري',
        highlight_modern: 'عاصمة المحافظة',
        density_ancient: 'كثافة متوسطة (إقليم مركزي)',
        density_trans: 'كثافة متوسطة (ولاية زراعية)',
        area_unit: 'كم²',
        coord_n: 'ش',
        coord_e: 'ق',
        bubble_capital: 'عاصمة:',
        bubble_symbol: 'رمز:',
        bubble_ruler: 'حاكم:',
        empty_title: 'بيانات هذه المنطقة قيد الإعداد',
        empty_sub: 'سيتم إضافة المعلومات قريباً',
        search_ancient: 'ابحث عن إقليم فرعوني...',
        search_trans: 'ابحث عن ولاية أو مدينة...',
        search_modern: 'ابحث عن محافظة مصرية...',
        locale: 'ar-EG',
        footer_version: ' — نظام خرائط مصر v2.0',
        comp_on: 'وضع المقارنة',
        comp_off: 'إلغاء الوضع',
        layer_sites_on: 'تم تفعيل طبقة المواقع الأثرية.',
        layer_sites_off: 'تم إخفاء المواقع الأثرية.',
        layer_routes_on: 'تم تفعيل ممرات التجارة البرية.',
        layer_routes_off: 'تم إخفاء ممرات التجارة.',
        comp_select: 'اختر منطقتين للمقارنة',
        comp_active: 'وضع المقارنة نَشِط',
        comp_pick_first: 'برجاء اختيار المنطقة الأولى للمقارنة',
        comp_pick_first_hud: 'اختر المنطقة الأولى...',
        comp_nome: 'إقليم',
        comp_gov: 'محافظة',
        comp_area_label: 'المساحة الجغرافية المُوثقة',
        comp_heritage_label: 'كثافة المواقع التاريخية',
        comp_site_unit: 'موقع',
        comp_archive_a: 'السجل الأرشيفي: المنطقة أ',
        comp_archive_b: 'السجل الأرشيفي: المنطقة ب',
        comp_verdict_larger: 'تفوقاً مساحياً',
        comp_verdict_heritage: 'بثراء أثري ملحوظ',
        comp_verdict_base: 'بناءً على التحليل، تظهر <strong>{0}</strong> {1}، بينما تتميز <strong>{2}</strong> {3}.',
        comp_end_session: 'إنهاء جلسة التحليل والعودة',
        comp_pick_first_sub: 'برجاء اختيار المنطقة الأولى للمقارنة',
        comp_pick_second: 'اختر المنطقة الثانية',
        comp_pick_second_sub: 'اختر المنطقة الثانية للمقارنة من الخريطة',
        comp_selected: 'تم اختيار: ',
        comp_success: 'تمت المقارنة بنجاح ✓',
        empty_title_default: 'اختر منطقة لاستكشاف تاريخها',
        empty_sub_default: 'انقر على أي محافظة في الخريطة',
        bce: 'ق.م',
        ce: 'م',
        ruler_ancient: 'حاكم إقليمي',
        ruler_modern: 'محافظ',
        status_ancient: 'إقليم محوري',
        status_modern: 'مركز إداري',
        era_ancient_badge: 'مصر القديمة',
        era_trans_badge: 'إسلامي/عثماني',
        era_modern_badge: 'العصر الحديث',
        type_ancient: 'إقليم',
        type_trans: 'ولاية',
        type_modern: 'محافظة',
        site_title: 'من الأقاليم إلى المحافظات — التطور الإداري لمصر',
        lang_name: 'AR',
        quote_eyebrow: 'في سجلات التاريخ',
        quote_main: 'لكل إقليم قديم <em>حكايةٌ</em> تمتد من عبادة <span>الآلهة والمعابد</span> إلى الثقل الإداري الحديث. هذه المقارنة تكشف كيف حافظت الجغرافيا المصرية على <em>هويتها</em> رغم تغيّر <span>الحضارات</span>.',
        quote_citation: 'سردية عبقرية المكان',
        trans_sec_eyebrow: 'التطور الزماني',
        trans_sec_title: 'تحول محافظات مصر',
        trans_bridge_intro: 'عقد مقارنة بين التقسيم الإداري لـ <span class="em-text">مصر الفرعونية</span> والوضع الحالي يتطلب العودة إلى نظام "المقاطعات" الذي استقر في العصر الفرعوني على <span class="em-text">٤٢ إقليماً</span>، ومقارنته بـ <span class="em-text">٢٧ محافظة</span> حالية.',
        trans_ancient_label: 'النظام العتيق',
        trans_ancient_unit: 'إقليماً (S\'put)',
        trans_modern_label: 'النظام المعاصر',
        trans_modern_unit: 'محافظة سيادية',
        trans_models_title: 'نماذج التحول الجغرافي',
        ledger_upper_title: 'الوجه القبلي (الصعيد)',
        ledger_lower_title: 'الوجه البحري (الدلتا)',
        l_upper_n1_old: 'تا-سيتي', l_upper_n1_new: 'أسوان',
        l_upper_n2_old: 'واست', l_upper_n2_new: 'الأقصر',
        l_upper_n3_old: 'ثني', l_upper_n3_new: 'سوهاج',
        l_upper_n4_old: 'أتف-خينت', l_upper_n4_new: 'أسيوط',
        l_lower_n1_old: 'إنب-حج', l_lower_n1_new: 'الجيزة',
        l_lower_n2_old: 'نيت-ريس', l_lower_n2_new: 'الغربية',
        l_lower_n3_old: 'وع-إم-حبو', l_lower_n3_new: 'الدقهلية',
        l_lower_n4_old: 'إم-خينت', l_lower_n4_new: 'الشرقية',
        intel_meta_label_1: 'الدقة الزمنية للبحث',
        intel_meta_val_1: '٥٠٠٠ عام',
        intel_meta_label_2: 'النمط الإداري المتبع',
        intel_meta_val_2: 'مركزية مرنة',
        intel_b1_title: 'العمق الجيوسياسي',
        intel_b1_desc: 'إعادة تعريف "الأقواس" الدفاعية القديمة لتصبح محافظات حدودية سيادية بطاقة تنموية شاملة ومستدامة.',
        intel_b1_tag1: 'تأمين الممرات', intel_b1_tag2: 'التوسع المعماري',
        intel_b2_title: 'المركزية الحضرية',
        intel_b2_desc: 'تطور "منف" و"طيبة" التاريخية إلى القاهرة الكبرى كمركز ثقل إداري يربط القارات الثلاث كحلقة وصل عالمية.',
        intel_b2_tag1: 'العاصمة الإدارية', intel_b2_tag2: 'الربط الرقمي',
        intel_b3_title: 'الهيكلة الوظيفية',
        intel_b3_desc: 'الانتقال من نظام الأقاليم المعتمد على الري إلى محافظات خدمية متكاملة لضمان جودة الحياة المحلية الشاملة.',
        intel_b3_tag1: 'اللامركزية الإدارية', intel_b3_tag2: 'نظم التنمية',
        codex_tag_main: 'المجمّع اللغوي',
        codex_tag_side: 'الببليوغرافيا',
        codex_title_main: 'أطلس الاشتقاق الصوتي',
        codex_title_side: 'المصادر الأكاديمية',
        etym_lang_ancient: 'القديم', etym_lang_modern: 'الحديث',
        etym_n1_old: "S'awt", etym_n1_new: 'أسيوط',
        etym_n2_old: 'Swenet', etym_n2_new: 'أسوان',
        etym_n3_old: 'Pa-Ym', etym_n3_new: 'الفيوم',
        source_1_title: 'موسوعة د. سليم حسن',
        source_1_desc: 'التنظيم الإداري في الدولة القديمة والوسطى',
        source_2_title: 'سجلات معبد إدفو',
        source_2_desc: 'القائمة الرسمية للأقاليم الـ ٤٢ المسجلة',
        t_num_1: '٠١',
        t_num_2: '٠٢',
        t_num_3: '٠٣',
        comp_main_title: 'المواجهة الجغرافية والتاريخية',
        hiero_eyebrow: '𓊹 دار المخطوطات التفاعلية',
        hiero_title: 'محرك الهيروغليفية',
        hiero_subtitle: 'شاهد الكيمياء الفورية للغة: حول أفكارك إلى النص المقدس للوجود المصري القديم.',
        hiero_input_label: 'وحدة الإدخال',
        hiero_output_label: 'البصيرة الهيروغليفية',
        hiero_placeholder: '𓂀 ستظهر ترجمتك هنا...',
        hiero_ref_btn: '𓏛 استكشاف جدول الأبجدية الشامل',
        hiero_breakdown: 'التحليل الهيكلي للرموز',
        hiero_input_ph_en: 'اكتب بالإنجليزية... مثل: Egypt is beautiful',
        hiero_input_ph_hiero: 'الصق الهيروغليفية هنا...',
        hiero_lang_en: 'الإنجليزية',
        hiero_lang_hiero: 'الهيروغليفية',
        copy: 'نسخ',
    },
    en: {
        dir: 'ltr',
        nav_map: 'Map',
        nav_transformation: 'Evolution',
        nav_legacy: 'Legacy',
        nav_eras: 'Eras',
        era_ancient: 'Ancient',
        era_transitional: 'Middle',
        era_modern: 'Modern',
        search_placeholder: 'Search...',
        units_label: 'Units:',
        active_site_label: 'Active Site:',
        protocol_label: 'Protocol:',
        ancient_protocol: 'Ancient',
        transitional_protocol: 'Middle',
        modern_protocol: 'Modern',
        hero_summary: 'Historical Evolution of Egypt\'s Administrative Division',
        hero_title_html: 'From <em>Nomes</em> to Governorates',
        hero_title_text: 'From Nomes to Governorates',
        hero_intro: 'A premium interactive journey through 5000 years of Egyptian history. From the 42 Pharaonic Nomes to the 27 modern Governorates, explore how administrative geography changed through the ages.',
        hero_btn_map: 'Explore Map',
        hero_btn_trans: 'Learn the Evolution',
        hero_secure: 'Secure',
        hero_center: 'Egypt Atlas',
        logo_text: 'Egypt Atlas',
        footer_connect: 'Connect with Developer',
        footer_sources: 'Sources',
        footer_privacy: 'Privacy',
        footer_copy: '© 2026 Egypt Digital Atlas — Developed by Adham Eldeeb',
        layer_panel_title: 'Customize Map',
        layer_era_title: 'Administrative Era',
        layer_ancient: 'Ancient Egypt (42 Nomes)',
        layer_transitional: 'Middle Era (Provinces)',
        layer_modern: 'Modern Egypt (27 Govs)',
        layer_data_title: 'Additional Data',
        layer_sites: 'Key Heritage Sites',
        layer_routes: 'Ancient Trade Routes',
        layer_labels: 'Show Labels',
        layer_theme_title: 'Map Theme',
        layer_theme_parchment: 'Historical',
        layer_theme_satellite: 'Satellite',
        layer_theme_minimal: 'Minimal',
        layer_opacity_title: 'Boundary Opacity',
        welcome_title: 'Welcome to the Egypt Historical Atlas',
        welcome_desc: 'Discover how Egyptian governorates and regions evolved through the ages in a unique interactive journey.',
        welcome_badge: 'GALA Protocol v2.5',
        protocol_label: 'System Guide',
        btn_start: 'Start Journey',
        detail_overview: 'Overview',
        detail_capital: 'Capital',
        detail_population: 'Demographics',
        detail_status: 'Admin Status',
        detail_ruler: 'Ruler/Patron',
        detail_period: 'Period',
        detail_monuments: 'Heritage Sites',
        detail_history_title: 'Historical Record',
        detail_timeline_title: 'Key Events',
        comparison_title: 'Strategic Contrast Analyzer',
        vs: 'VS',
        winner_label: 'Most Influential',
        analysis_verdict: 'Final Analysis',
        close: 'Close',
        comp_pick_first_sub: 'Please select the first region',
        comp_pick_second: 'Select second region',
        comp_pick_second_sub: 'Select the second region on the map',
        comp_selected: 'Selected: ',
        comp_success: 'Comparison Successful ✓',
        credits: 'Developed by Adham Eldeeb',
        legacy_title: 'Legacy Redefining the Present',
        stat_years: 'Years of Admin Stability',
        stat_regions: 'Historical Pharaonic Nomes',
        pillars_title: 'Columns of Historical Regions',
        geo_nile: '🏞 Nile Valley',
        geo_delta: '🌾 Delta',
        geo_desert: '🏜 Desert',
        geo_coastal: '🌊 Coastal',
        geo_heritage: '⭐ Rich Heritage',
        tooltip_zoom_in: 'Zoom In',
        tooltip_zoom_out: 'Zoom Out',
        tooltip_layers: 'Layer Settings',
        tooltip_compare: 'Start Comparison',
        tooltip_help: 'Need Help?',
        bubble_capital: 'Capital:',
        bubble_symbol: 'Symbol:',
        bubble_ruler: 'Ruler:',
        journey_eyebrow: 'Geo-Administrative Transformations',
        journey_title: 'Record of Land Governance Systems',
        journey_desc: 'Three thousand years of administrative genius, embodying Egypt\'s transition from the organic formation of the Valley to the modern digital republic model embracing its deserts.',
        ancient_bg_text: '3000<br>BC',
        ancient_tag: 'Pharaonic Era',
        ancient_years: '3000 BC — 30 BC',
        ancient_title: 'The Nome System',
        ancient_subtitle: 'Organic Division of the Nile',
        ancient_desc: 'The Nome was the basic building block of life and organization. Nomes originated as small agricultural kingdoms, then unified under the Pharaoh. Characterized by geographic decentralization with absolute political centrality.',
        ancient_stat_1_val: '42', ancient_stat_1_lbl: 'Independent Nomes',
        ancient_stat_2_val: 'Memphis', ancient_stat_2_lbl: 'First Capital',
        ancient_stat_3_val: 'Maat', ancient_stat_3_lbl: 'Law of Order',
        trans_bg_text: '641<br>AD',
        trans_tag: 'Era of Centralization',
        trans_years: '641 AD — 1952 AD',
        trans_title: 'Provinces & Directorates',
        trans_subtitle: 'Demographic Shift',
        trans_desc: 'Egypt moved towards a complex bureaucratic institutionalism. Scattered regions were merged into major directorates under Muhammad Ali, who focused on detailed land surveys and solid irrigation systems.',
        trans_stat_1_val: '14', trans_stat_1_lbl: 'Main Directorates',
        trans_stat_2_val: 'Fustat', trans_stat_2_lbl: 'Foundation Center',
        trans_stat_3_val: 'Regulations', trans_stat_3_lbl: 'Admin Constitution',
        modern_bg_text: '2026<br>AD',
        modern_tag: 'New Republic',
        modern_years: '1952 AD — 2026 AD',
        modern_title: 'Digital Governance',
        modern_subtitle: 'Planning the Future',
        modern_desc: 'A radical departure from the narrow Nile Valley towards comprehensive national planning. The state adopted new administrative boundaries based on smart cities and big data.',
        modern_stat_1_val: '27', modern_stat_1_lbl: 'Modern Governorates',
        modern_stat_2_val: 'Administrative', modern_stat_2_lbl: 'Smart Capital',
        modern_stat_2_val: 'Administrative', modern_stat_2_lbl: 'Smart Capital',
        modern_stat_3_val: 'Digital', modern_stat_3_lbl: 'Decision Hub',
        compass_n: 'N', compass_e: 'E', compass_s: 'S', compass_w: 'W',
        footer_nav_title: 'Central Navigation',
        footer_link_1: '1. Interactive Map',
        footer_link_2: '2. Transformation Models',
        footer_link_3: '3. Egyptian Legacy',
        footer_link_4: '4. Nome Pillars',
        footer_timeline_title: 'Timeline',
        footer_era_1: 'BC Ancient Egypt',
        footer_era_2: 'AD Middle Ages',
        footer_era_3: '2026 Modern Era',
        footer_doc_title: 'Digital Documentation',
        footer_doc_1: '◎ Research Methodology',
        footer_doc_2: '◎ Hieroglyphic Symbol Guide',
        footer_doc_3: '◎ Changelog',
        footer_refs_title: 'Certified Sources',
        ref_1_auth: 'Gamal Hamdan',
        ref_1_work: 'Character of Egypt — A Study in the Genius of Place',
        ref_2_auth: 'Selim Hassan',
        ref_2_work: 'Encyclopedia of Ancient Egypt (Vol. 1)',
        footer_vision_title: 'Historical Vision',
        footer_vision_proclamation: 'Egypt is not merely geography; it is history embodied in the features of the land and the genius of the Nile—an eternal journey from stone to soul.',
        footer_vision_seal: 'Eternal Registry',
        footer_clock_label: 'Current Time',
        footer_research_label: 'Historical Documentation',
        footer_research_name: 'Ancient Egypt Nomes',
        footer_dev_tag: 'Lead Developer',
        footer_dev_name: 'Adham Eldeeb',
        footer_dev_desc: 'UX Designer & Technical solutions engineer specializing in heritage digitization.',
        footer_dev_btn: 'Visit Profile',
        legacy_bg: 'Admin Legacy',
        legacy_bg_1: 'Genius of Place',
        legacy_bg_2: 'Roots of Rule',
        legacy_eyebrow: 'Sustainable Impact',
        legacy_text: 'Small agricultural kingdoms evolved into a unified state under the Pharaoh. The administrative division was a vital organization linking the sanctity of the Nile with human needs.',
        blueprint_label: 'S\'put System',
        blueprint_title: 'Sovereignty & Irrigation',
        blueprint_desc: 'The first administrative system in history linking resource distribution to the Nile flood, establishing state stability for millennia.',
        pillars_bg: 'Columns of Civilization',
        pillars_bg_1: 'Sovereign Record',
        pillars_bg_2: 'Nile Nomes',
        pillars_eyebrow: 'Record of Sovereignty',
        pillar_1_tag: 'Nome 4', pillar_1_name: 'Thebes', pillar_1_desc: 'Capital of the Empire and the most sacred religious center in ancient Egyptian history.', pillar_1_era: 'New Kingdom', pillar_1_loc: 'Luxor',
        pillar_2_tag: 'Nome 1', pillar_2_name: 'Memphis', pillar_2_desc: 'First capital of unified Egypt, balance of the two lands and symbol of central sovereignty.', pillar_2_era: 'Old Kingdom', pillar_2_loc: 'Giza',
        pillar_3_tag: 'Nome 2', pillar_3_name: 'Edfu', pillar_3_desc: 'Stronghold of Horus worship, and guardian of the historic southern gateway of Egypt.', pillar_3_era: 'Through Ages', pillar_3_loc: 'Aswan',
        pillar_4_tag: 'Nome 5', pillar_4_name: 'Sais', pillar_4_desc: 'Center of wisdom and diplomacy in the heart of the Delta, seat of the 26th Dynasty.', pillar_4_era: 'Late Period', pillar_4_loc: 'Gharbia',
        pillar_5_tag: 'Nome 11', pillar_5_name: 'Tell-Muqdam', pillar_5_desc: 'The city of lions and military power center in Eastern Delta throughout history.', pillar_5_era: 'Inter. Period', pillar_5_loc: 'Dakahlia',
        pillar_6_tag: 'Nome 8', pillar_6_name: 'Abydos', pillar_6_desc: 'The holy city and center of Osiris worship, connecting earth with the afterlife.', pillar_6_era: 'Pre-Dynastic', pillar_6_loc: 'Sohag',
        feature_1_title: 'Search:', feature_1_desc: 'Use the search bar to find any city or governorate.',
        feature_2_title: 'Travel Through Time:', feature_2_desc: 'Use era buttons or timeline slider to change age.',
        feature_3_title: 'Explore:', feature_3_desc: 'Click any region on the map to view historical details.',
        feature_4_title: 'Compare:', feature_4_desc: 'Activate "Comparison Mode" to compare two regions side-by-side.',
        here_bubble: '!Explore Here',
        bot_help: 'Need Help?',
        highlight_ancient: 'Ancient Capital',
        highlight_trans: 'Admin Center',
        highlight_modern: 'Gov Capital',
        density_ancient: 'Medium (Core Nome)',
        density_trans: 'Medium (Agri Province)',
        area_unit: 'km²',
        coord_n: 'N',
        coord_e: 'E',
        empty_title: 'Region data is being prepared',
        empty_sub: 'Information will be added shortly',
        search_ancient: 'Search for a Nome...',
        search_trans: 'Search for a Province...',
        search_modern: 'Search for a Governorate...',
        locale: 'en-US',
        footer_version: ' — Egypt Map System v2.0',
        comp_on: 'Comparison Mode',
        comp_off: 'Exit Mode',
        layer_sites_on: 'Heritage sites layer enabled.',
        layer_sites_off: 'Heritage sites layer hidden.',
        layer_routes_on: 'Trade routes layer enabled.',
        layer_routes_off: 'Trade routes layer hidden.',
        comp_select: 'Select Two Regions to Compare',
        comp_active: 'Comparison Mode Active',
        comp_pick_first: 'Please select first region on map',
        comp_pick_first_hud: 'Select First Region...',
        comp_nome: 'Nome',
        comp_gov: 'Governorate',
        comp_area_label: 'Documented Geographic Area',
        comp_heritage_label: 'Heritage Site Density',
        comp_site_unit: 'sites',
        comp_archive_a: 'Archive: Region A',
        comp_archive_b: 'Archive: Region B',
        comp_verdict_larger: 'geographic superiority',
        comp_verdict_heritage: 'significant archaeological richness',
        comp_verdict_base: 'Analysis shows <strong>{0}</strong> has {1}, whereas <strong>{2}</strong> features {3}.',
        comp_end_session: 'End Session & Return',
        empty_title_default: 'Select a region to explore its history',
        empty_sub_default: 'Click on any governorate on the map',
        bce: 'BCE',
        ce: 'AD',
        ruler_ancient: 'Nomarch',
        ruler_modern: 'Governor',
        status_ancient: 'Core Nome',
        status_modern: 'Admin Center',
        era_ancient_badge: 'Ancient Egypt',
        era_trans_badge: 'Islamic/Ottoman',
        era_modern_badge: 'Modern Era',
        type_ancient: 'Nome',
        type_trans: 'Province',
        type_modern: 'Governorate',
        site_title: 'From Nomes to Governorates — Egypt\'s Evolution',
        lang_name: 'EN',
        quote_eyebrow: 'IN THEIR OWN WORDS',
        quote_main: 'For three thousand years, they <em>carved eternity</em> into stone. Built temples that reached the <em>stars</em>. Gave the world its first <span>writing, medicine, and wonder</span>.',
        quote_citation: 'THE BOOK OF THE DEAD, ~1550 BCE',
        trans_sec_eyebrow: 'Temporal Evolution',
        trans_sec_title: 'Transformation of Egypt\'s Governorates',
        trans_bridge_intro: 'Comparing the administrative division of <span class="em-text">Pharaonic Egypt</span> to its current state requires revisiting the "Nome" system that settled on <span class="em-text">42 Nomes</span> and comparing it to <span class="em-text">27 modern Governorates</span>.',
        trans_ancient_label: 'The Ancient System',
        trans_ancient_unit: 'Nomes (S\'put)',
        trans_modern_label: 'The Modern System',
        trans_modern_unit: 'Sovereign Governorates',
        trans_models_title: 'Geographic Transformation Models',
        ledger_upper_title: 'Upper Egypt (Said)',
        ledger_lower_title: 'Lower Egypt (Delta)',
        l_upper_n1_old: 'Ta-Seti', l_upper_n1_new: 'Aswan',
        l_upper_n2_old: 'Waset', l_upper_n2_new: 'Luxor',
        l_upper_n3_old: 'Thinis', l_upper_n3_new: 'Sohag',
        l_upper_n4_old: 'Atef-Khent', l_upper_n4_new: 'Asyut',
        l_lower_n1_old: 'Ineb-Hedj', l_lower_n1_new: 'Giza',
        l_lower_n2_old: 'Neit-Res', l_lower_n2_new: 'Gharbia',
        l_lower_n3_old: 'Wa-em-Habu', l_lower_n3_new: 'Dakahlia',
        l_lower_n4_old: 'Im-Khent', l_lower_n4_new: 'Sharqia',
        intel_meta_label_1: 'Research Time Precision',
        intel_meta_val_1: '5000 Years',
        intel_meta_label_2: 'Admin Pattern',
        intel_meta_val_2: 'Flexible Centralization',
        intel_b1_title: 'Geopolitical Depth',
        intel_b1_desc: 'Redefining ancient defensive "Arcs" into sovereign border governorates with comprehensive power.',
        intel_b1_tag1: 'Securing Corridors', intel_b1_tag2: 'Urban Expansion',
        intel_b2_title: 'Urban Centrality',
        intel_b2_desc: 'The evolution of historic "Memphis" and "Thebes" into Greater Cairo as a global hub.',
        intel_b2_tag1: 'New Capital', intel_b2_tag2: 'Digital Link',
        intel_b3_title: 'Functional Structure',
        intel_b3_desc: 'Transitioning from irrigation-based Nomes to integrated service governorates.',
        intel_b3_tag1: 'Decentralization', intel_b3_tag2: 'Growth Systems',
        codex_tag_main: 'Linguistic Complex',
        codex_tag_side: 'Bibliography',
        codex_title_main: 'Phonetic Etymology Atlas',
        codex_title_side: 'Academic Sources',
        etym_lang_ancient: 'Ancient', etym_lang_modern: 'Modern',
        etym_n1_old: "S'awt", etym_n1_new: 'Asyut',
        etym_n2_old: 'Swenet', etym_n2_new: 'Aswan',
        etym_n3_old: 'Pa-Ym', etym_n3_new: 'Fayyum',
        source_1_title: 'Dr. Selim Hassan Encyclopedia',
        source_1_desc: 'Administrative Organization History',
        source_2_title: 'Edfu Temple Records',
        source_2_desc: 'Official list of the 42 Nomes',
        t_num_1: '01',
        t_num_2: '02',
        t_num_3: '03',
        comp_main_title: 'Geo-Historical Comparison',
        hiero_eyebrow: '𓊹 Interactive Scriptorium',
        hiero_title: 'Hieroglyph Engine',
        hiero_subtitle: 'Witness the instant alchemy of language: Transform your thoughts into the sacred script of existence.',
        hiero_input_label: 'Input Terminal',
        hiero_output_label: 'Hieroglyphic Insight',
        hiero_placeholder: '𓂀 Your translation will emerge here...',
        hiero_ref_btn: '𓏛 Explore the Universal Alphabet Chart',
        hiero_breakdown: 'Analytical Character Breakdown',
        hiero_input_ph_en: 'Type English text... e.g. Egypt is beautiful',
        hiero_input_ph_hiero: 'Paste hieroglyphs here...',
        hiero_lang_en: 'English',
        hiero_lang_hiero: 'Hieroglyphs',
        copy: 'Copy',
    },
    de: {
        dir: 'ltr',
        nav_map: 'Karte',
        nav_transformation: 'Evolution',
        nav_legacy: 'Erbe',
        nav_eras: 'Epochen',
        era_ancient: 'Antike',
        era_transitional: 'Mittelalter',
        era_modern: 'Moderne',
        search_placeholder: 'Suche...',
        units_label: 'Einheiten:',
        active_site_label: 'Aktiver Standort:',
        protocol_label: 'Protokoll:',
        ancient_protocol: 'Alt',
        transitional_protocol: 'Mittel',
        modern_protocol: 'Neu',
        hero_summary: 'Historische Entwicklung der ägyptischen Verwaltungsgliederung',
        hero_title_html: 'Vom <em>Gau</em> zum Gouvernement',
        hero_title_text: 'Vom Gau zum Gouvernement',
        hero_intro: 'Eine erstklassige interaktive Reise durch 5000 Jahre ägyptischer Geschichte. Sehen Sie, wie sich die administrative Geographie über die Jahrhunderte verändert hat.',
        hero_btn_map: 'Karte erkunden',
        hero_btn_trans: 'Evolution lernen',
        hero_secure: 'Sicher',
        hero_center: 'Ägypten Atlas',
        logo_text: 'Ägypten Atlas',
        footer_connect: 'Entwickler kontaktieren',
        footer_sources: 'Quellen',
        footer_privacy: 'Datenschutz',
        footer_copy: '© 2026 Ägypten Digital Atlas — Entwickelt von Adham Eldeeb',
        layer_panel_title: 'Karte anpassen',
        layer_era_title: 'Administrative Ära',
        layer_ancient: 'Altes Ägypten (42 Gaue)',
        layer_transitional: 'Mittelalter (Provinzen)',
        layer_modern: 'Modernes Ägypten (27 Gouv.)',
        layer_data_title: 'Zusätzliche Daten',
        layer_sites: 'Wichtige Erbestätten',
        layer_routes: 'Antike Handelswege',
        layer_labels: 'Labels anzeigen',
        layer_theme_title: 'Kartenthema',
        layer_theme_parchment: 'Historisch',
        layer_theme_satellite: 'Satellit',
        layer_theme_minimal: 'Minimal',
        layer_opacity_title: 'Grenz-Deckkraft',
        welcome_title: 'Willkommen zum Ägyptischen Historischen Atlas',
        welcome_desc: 'Entdecken Sie, wie sich die ägyptischen Gouvernements und Regionen im Laufe der Jahrhunderte entwickelt haben.',
        welcome_badge: 'GALA Protokoll v2.5',
        protocol_label: 'Systemhandbuch',
        btn_start: 'Reise beginnen',
        detail_overview: 'Übersicht',
        detail_capital: 'Hauptstadt',
        detail_population: 'Demografie',
        detail_status: 'Verwaltungsstatus',
        detail_ruler: 'Herrscher/Patron',
        detail_period: 'Zeitraum',
        detail_monuments: 'Kulturerbe',
        detail_history_title: 'Historischer Bericht',
        detail_timeline_title: 'Wichtige Ereignisse',
        comparison_title: 'Strategischer Kontrastanalysator',
        vs: 'VS',
        winner_label: 'Einflussreichste',
        analysis_verdict: 'Abschließende Analyse',
        close: 'Schließen',
        credits: 'Entwickelt von Adham Eldeeb',
        legacy_title: 'Erbe definiert die Gegenwart neu',
        stat_years: 'Jahre admin. Stabilität',
        stat_regions: 'Historische Gaus Ägyptens',
        pillars_title: 'Säulen historischer Regionen',
        geo_nile: '🏞 Nil-Tal',
        geo_delta: '🌾 Delta',
        geo_desert: '🏜 Wüste',
        geo_coastal: '🌊 Küste',
        geo_heritage: '⭐ Reiches Erbe',
        tooltip_zoom_in: 'Heranzoomen',
        tooltip_zoom_out: 'Herauszoomen',
        tooltip_layers: 'Ebenen-Einstellungen',
        tooltip_compare: 'Vergleich starten',
        tooltip_help: 'Hilfe anfordern',
        journey_eyebrow: 'Geoadministrative Transformationen',
        journey_title: 'Schnittstelle der Landsysteme',
        journey_desc: 'Drei Jahrtausende administrativer Genialität, die den Übergang Ägyptens von der organischen Formation des Tals zur modernen digitalen Republik verkörpern.',
        ancient_bg_text: '3000<br>v. Chr.',
        ancient_tag: 'Pharaonische Ära',
        ancient_years: '3000 v. Chr. — 30 v. Chr.',
        ancient_title: 'Das Gau-System',
        ancient_subtitle: 'Organische Teilung des Nils',
        ancient_desc: 'Der Gau war der Grundbaustein für Leben und Organisation. Gaue entstanden als kleine landwirtschaftliche Königreiche und wurden dann unter dem Pharao vereinigt.',
        ancient_stat_1_val: '42', ancient_stat_1_lbl: 'Unabhängige Gaue',
        ancient_stat_2_val: 'Memphis', ancient_stat_2_lbl: 'Erste Hauptstadt',
        ancient_stat_3_val: 'Maat', ancient_stat_3_lbl: 'Gesetz der Ordnung',
        trans_bg_text: '641<br>n. Chr.',
        trans_tag: 'Ära der Zentralisierung',
        trans_years: '641 n. Chr. — 1952 n. Chr.',
        trans_title: 'Provinzen & Direktionen',
        trans_subtitle: 'Demografischer Wandel',
        trans_desc: 'Ägypten bewegte sich auf einen komplexen bürokratischen Institutionalismus. Verstreute Regionen wurden unter Muhammad Ali zu großen Direktionen zusammengeführt.',
        trans_stat_1_val: '14', trans_stat_1_lbl: 'Hauptdirektionen',
        trans_stat_2_val: 'Fustat', trans_stat_2_lbl: 'Gründungszentrum',
        trans_stat_3_val: 'Vorschriften', trans_stat_3_lbl: 'Admin-Verfassung',
        modern_bg_text: '2026<br>n. Chr.',
        modern_tag: 'Neue Republik',
        modern_years: '1952 n. Chr. — 2026 n. Chr.',
        modern_title: 'Digitale Governance',
        modern_subtitle: 'Zukunft planen',
        modern_desc: 'Ein radikaler Aufbruch aus dem engen Niltal hin zu einer umfassenden nationalen Planung. Der Staat verabschiedete neue administrative Grenzen basierend auf Smart Cities.',
        modern_stat_1_val: '27', modern_stat_1_lbl: 'Moderne Gouvernements',
        modern_stat_2_val: 'Admin', modern_stat_2_lbl: 'Smart-Hauptstadt',
        modern_stat_3_val: 'Digital', modern_stat_3_lbl: 'Entscheidungszentrum',
        compass_n: 'N', compass_e: 'O', compass_s: 'S', compass_w: 'W',
        footer_nav_title: 'Zentrale Navigation',
        footer_link_1: '1. Interaktive Karte',
        footer_link_2: '2. Transformationsmodelle',
        footer_link_3: '3. Ägyptisches Erbe',
        footer_link_4: '4. Gau-Säulen',
        footer_timeline_title: 'Zeitplan',
        footer_era_1: 'v. Chr. Altes Ägypten',
        footer_era_2: 'n. Chr. Mittelalter',
        footer_era_3: '2026 Moderne Ära',
        footer_doc_title: 'Digitale Dokumentation',
        footer_doc_1: '◎ Forschungsmethodik',
        footer_doc_2: '◎ Hieroglyphen-Handbuch',
        footer_doc_3: '◎ Änderungsprotokoll',
        footer_refs_title: 'Zertifizierte Quellen',
        ref_1_auth: 'Gamal Hamdan',
        ref_1_work: 'Charakter Ägyptens — Studie zum Genie des Ortes',
        ref_2_auth: 'Selim Hassan',
        ref_2_work: 'Enzyklopädie des alten Ägyptens (Band 1)',
        footer_vision_title: 'Historische Vision',
        footer_vision_proclamation: 'Ägypten ist nicht bloß Geographie; es ist verkörperte Geschichte in den Zügen des Landes und dem Genie des Nils – eine ewige Reise vom Stein zur Seele.',
        footer_vision_seal: 'Ewiges Register',
        footer_clock_label: 'Aktuelle Zeit',
        footer_research_label: 'Historische Dokumentation',
        footer_research_name: 'Gaue des Alten Ägyptens',
        footer_dev_tag: 'Hauptentwickler',
        footer_dev_name: 'Adham Eldeeb',
        footer_dev_desc: 'UX-Designer & Ingenieur für technische Lösungen, spezialisiert auf die Digitalisierung des Kulturerbes.',
        footer_dev_btn: 'Profil besuchen',
        legacy_bg: 'Admin-Erbe',
        legacy_bg_1: 'Genie des Ortes',
        legacy_bg_2: 'Wurzeln der Herrschaft',
        legacy_eyebrow: 'Nachhaltige Wirkung',
        legacy_text: 'Das ägyptische Verwaltungssystem war nicht nur Linien auf einer Karte, sondern eine vitale Organisation, die die Heiligkeit des Nils mit menschlichen Bedürfnissen verband.',
        blueprint_label: 'S\'put-System',
        blueprint_title: 'Souveränität & Bewässerung',
        blueprint_desc: 'Das erste Verwaltungssystem der Geschichte, das die Ressourcenverteilung mit der Nilflut verband und so die Stabilität des Staates über Jahrtausende etablierte.',
        pillars_bg: 'Säulen der Zivilisation',
        pillars_bg_1: 'Souveränes Register',
        pillars_bg_2: 'Nil-Gaue',
        pillars_eyebrow: 'Register der Souveränität',
        pillar_1_tag: 'Gau 4', pillar_1_name: 'Theben', pillar_1_desc: 'Hauptstadt des Reiches und das heiligste religiöse Zentrum in der altägyptischen Geschichte.', pillar_1_era: 'Neues Reich', pillar_1_loc: 'Luxor',
        pillar_2_tag: 'Gau 1', pillar_2_name: 'Memphis', pillar_2_desc: 'Erste Hauptstadt des vereinigten Ägyptens, Symbol für Einheit und zentrale Souveränität.', pillar_2_era: 'Altes Reich', pillar_2_loc: 'Gizeh',
        pillar_3_tag: 'Gau 2', pillar_3_name: 'Edfu', pillar_3_desc: 'Hochburg der Horus-Verehrung und Wächter des historischen südlichen Tores Ägyptens.', pillar_3_era: 'Über die Äras', pillar_3_loc: 'Assuan',
        pillar_4_tag: 'Gau 5', pillar_4_name: 'Sais', pillar_4_desc: 'Zentrum für Weisheit und Diplomatie im Herzen des Deltas, Sitz der 26. Dynastie.', pillar_4_era: 'Spätzeit', pillar_4_loc: 'Gharbia',
        pillar_5_tag: 'Gau 11', pillar_5_name: 'Tell-Muqdam', pillar_5_desc: 'Die Stadt des Löwen und militärisches Kraftzentrum im östlichen Delta.', pillar_5_era: 'Zwischenzeit', pillar_5_loc: 'Dakahlia',
        pillar_6_tag: 'Gau 8', pillar_6_name: 'Abydos', pillar_6_desc: 'Die heilige Stadt und Zentrum der Osiris-Verehrung, Verbindung zwischen Erde und Jenseits.', pillar_6_era: 'Frühdynastisch', pillar_6_loc: 'Sohag',
        feature_1_title: 'Suchen:', feature_1_desc: 'Verwenden Sie die Suchleiste, um eine Stadt oder ein Gouvernement zu finden.',
        feature_2_title: 'Zeitreise:', feature_2_desc: 'Verwenden Sie die Ära-Schaltflächen oder den Schieberegler.',
        feature_3_title: 'Erkunden:', feature_3_desc: 'Klicken Sie auf eine Region, um historische Details anzuzeigen.',
        feature_4_title: 'Vergleichen:', feature_4_desc: 'Aktivieren Sie den "Vergleichsmodus", um zwei Regionen nebeneinander zu vergleichen.',
        here_bubble: '!Hier erkunden',
        bot_help: 'Hilfe?',
        highlight_ancient: 'Alte Hauptstadt',
        highlight_trans: 'Verwaltungszentrum',
        highlight_modern: 'Gouvernementshauptstadt',
        density_ancient: 'Mittel (Kern-Gau)',
        density_trans: 'Mittel (Agrarprovinz)',
        area_unit: 'km²',
        coord_n: 'N',
        coord_e: 'O',
        bubble_capital: 'Hauptstadt:',
        bubble_symbol: 'Symbol:',
        bubble_ruler: 'Herrscher:',
        empty_title: 'Regionsdaten werden vorbereitet',
        empty_sub: 'Informationen werden in Kürze hinzugefügt',
        search_ancient: 'Suche nach einem Gau...',
        search_trans: 'Suche nach einer Provinz...',
        search_modern: 'Suche nach einem Gouvernement...',
        locale: 'de-DE',
        footer_version: ' — Ägypten Kartensystem v2.0',
        comp_on: 'Vergleichsmodus',
        comp_off: 'Modus verlassen',
        layer_sites_on: 'Kulturerbestätten aktiviert.',
        layer_sites_off: 'Kulturerbestätten ausgeblendet.',
        layer_routes_on: 'Handelsrouten aktiviert.',
        layer_routes_off: 'Handelsrouten ausgeblendet.',
        comp_select: 'Zwei Regionen zum Vergleich wählen',
        comp_active: 'Vergleichsmodus Aktiv',
        comp_pick_first: 'Bitte erste Region auf Karte wählen',
        comp_pick_first_hud: 'Erste Region wählen...',
        comp_nome: 'Gau',
        comp_gov: 'Gouvernement',
        comp_area_label: 'Dokumentierte Fläche',
        comp_heritage_label: 'Dichte der Kulturerbestätten',
        comp_site_unit: 'Stätten',
        comp_archive_a: 'Archiv: Region A',
        comp_archive_b: 'Archiv: Region B',
        comp_verdict_larger: 'geografische Überlegenheit',
        comp_verdict_heritage: 'bedeutenden archäologischen Reichtum',
        comp_verdict_base: 'Die Analyse zeigt, dass <strong>{0}</strong> eine {1} aufweist, während <strong>{2}</strong> durch einen {3} besticht.',
        comp_end_session: 'Sitzung beenden',
        comp_pick_first_sub: 'Bitte wählen Sie die erste Region',
        comp_pick_second: 'Wählen Sie die zweite Region',
        comp_pick_second_sub: 'Wählen Sie die zweite Region auf der Karte',
        comp_selected: 'Gewählt: ',
        comp_success: 'Vergleich erfolgreich ✓',
        empty_title_default: 'Wählen Sie eine Region zur Erkundung',
        empty_sub_default: 'Klicken Sie auf ein Gouvernement',
        wiki_prefix: 'https://de.wikipedia.org/wiki/',
        ruler_ancient: 'Nomarch',
        ruler_modern: 'Gouverneur',
        status_ancient: 'Kern-Gau',
        status_modern: 'Verwaltungszentrum',
        era_ancient_badge: 'Altes Ägypten',
        era_trans_badge: 'Islamisch/Osmanisch',
        era_modern_badge: 'Moderne',
        type_ancient: 'Gau',
        type_trans: 'Provinz',
        type_modern: 'Gouvernement',
        site_title: 'Von Gauen zu Gouvernements — Ägyptens Evolution',
        lang_name: 'DE',
        quote_eyebrow: 'IN IHREN EIGENEN WORTEN',
        quote_main: 'Dreitausend Jahre lang <em>meißelten sie die Ewigkeit</em> in Stein. Bauten Tempel, die die <em>Sterne</em> erreichten. Gaben der Welt die erste <span>Schrift, Medizin und Wunder</span>.',
        quote_citation: 'DAS ÄGYPTISCHE TOTENBUCH, ~1550 v. Chr.',
        trans_sec_eyebrow: 'Zeitliche Entwicklung',
        trans_sec_title: 'Wandel der ägyptischen Gouvernements',
        trans_bridge_intro: 'Ein Vergleich der Verwaltungsgliederung des <span class="em-text">pharaonischen Ägyptens</span> mit dem heutigen Stand erfordert die Rückkehr zum „Gau"-System mit <span class="em-text">42 Gauen</span> und den Vergleich mit <span class="em-text">27 modernen Gouvernements</span>.',
        trans_ancient_label: 'Das antike System',
        trans_ancient_unit: 'Gaue (S\'put)',
        trans_modern_label: 'Das moderne System',
        trans_modern_unit: 'Souveräne Gouvernements',
        trans_models_title: 'Geografische Transformationsmodelle',
        ledger_upper_title: 'Oberägypten (Said)',
        ledger_lower_title: 'Unterägypten (Delta)',
        l_upper_n1_old: 'Ta-Seti', l_upper_n1_new: 'Assuan',
        l_upper_n2_old: 'Waset', l_upper_n2_new: 'Luxor',
        l_upper_n3_old: 'Thinis', l_upper_n3_new: 'Sohag',
        l_upper_n4_old: 'Atef-Chent', l_upper_n4_new: 'Asyut',
        l_lower_n1_old: 'Ineb-Hedj', l_lower_n1_new: 'Gizeh',
        l_lower_n2_old: 'Neit-Res', l_lower_n2_new: 'Gharbia',
        l_lower_n3_old: 'Wa-em-Habu', l_lower_n3_new: 'Dakahlia',
        l_lower_n4_old: 'Im-Chent', l_lower_n4_new: 'Sharqia',
        intel_meta_label_1: 'Zeitliche Forschungspräzision',
        intel_meta_val_1: '5000 Jahre',
        intel_meta_label_2: 'Verwaltungsmuster',
        intel_meta_val_2: 'Flexible Zentralisierung',
        intel_b1_title: 'Geopolitische Tiefe',
        intel_b1_desc: 'Neudefinition antiker "Bögen" in souveräne Grenz-Gouvernements.',
        intel_b1_tag1: 'Korridorsicherung', intel_b1_tag2: 'Architektur-Expansion',
        intel_b2_title: 'Urbane Zentralität',
        intel_b2_desc: 'Die Entwicklung von "Memphis" und "Theben" zum Großraum Kairo.',
        intel_b2_tag1: 'Verwaltungshauptstadt', intel_b2_tag2: 'Digitale Vernetzung',
        intel_b3_title: 'Funktionale Strukturierung',
        intel_b3_desc: 'Übergang vom bewässerungsbasierten Gau-System zu integrierten Gouvernements.',
        intel_b3_tag1: 'Dezentralisierung', intel_b3_tag2: 'Entwicklungssysteme',
        codex_tag_main: 'Sprachkomplex',
        codex_tag_side: 'Bibliografie',
        codex_title_main: 'Phonetischer Etymologie-Atlas',
        codex_title_side: 'Akademische Quellen',
        etym_lang_ancient: 'Antik', etym_lang_modern: 'Modern',
        etym_n1_old: "S'awt", etym_n1_new: 'Assiut',
        etym_n2_old: 'Swenet', etym_n2_new: 'Assuan',
        etym_n3_old: 'Pa-Ym', etym_n3_new: 'Fayyum',
        source_1_title: 'Dr. Selim Hassan Enzyklopädie',
        source_1_desc: 'Verwaltungsorganisations-Historie',
        bce: 'v. Chr.',
        ce: 'n. Chr.',
        t_num_1: '01',
        t_num_2: '02',
        t_num_3: '03',
        empty_title_default: 'Wählen Sie eine Region zur Erkundung',
        empty_sub_default: 'Klicken Sie auf ein Gouvernement auf der Karte',
        comp_main_title: 'Geo-Historischer Vergleich',
        hiero_eyebrow: '𓊹 Interaktives Skriptorium',
        hiero_title: 'Hieroglyphen-Engine',
        hiero_subtitle: 'Erleben Sie die sofortige Alchemie der Sprache: Verwandeln Sie Ihre Gedanken in die heilige Schrift des Daseins.',
        hiero_input_label: 'Eingabeterminal',
        hiero_output_label: 'Hieroglyphische Einsicht',
        hiero_placeholder: '𓂀 Ihre Übersetzung wird hier erscheinen...',
        hiero_ref_btn: '𓏛 Entdecken Sie die universelle Alphabet-Tabelle',
        hiero_breakdown: 'Strukturelle Symbolanalyse',
        hiero_input_ph_en: 'Englischen Text eingeben... z.B. Egypt is beautiful',
        hiero_input_ph_hiero: 'Hieroglyphen hier einfügen...',
        hiero_lang_en: 'Englisch',
        hiero_lang_hiero: 'Hieroglyphen',
        copy: 'Kopieren',
    }
};

window.cycleLanguage = function () {
    const langs = Object.keys(translations);
    let idx = langs.indexOf(currentLang);
    let nextIdx = (idx + 1) % langs.length;
    setLanguage(langs[nextIdx]);
};

window.setLanguage = function (lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    // Update Language Toggle
    const langLabel = document.getElementById('current-lang-label');
    if (langLabel) langLabel.innerText = t.lang_name;

    // Redundant legacy buttons (safety)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(`'${lang}'`));
    });

    // Translate Static UI
    document.title = t.site_title;

    // Nav Links
    document.querySelectorAll('.t-nav-map').forEach(el => el.innerText = t.nav_map);
    document.querySelectorAll('.t-nav-transformation').forEach(el => el.innerText = t.nav_transformation);
    document.querySelectorAll('.t-nav-legacy').forEach(el => el.innerText = t.nav_legacy);
    document.querySelectorAll('.t-nav-eras').forEach(el => el.innerText = t.nav_eras);

    // Eras Switcher
    document.querySelectorAll('.era-btn[data-pos="0"]').forEach(el => el.innerText = t.era_ancient);
    document.querySelectorAll('.era-btn[data-pos="1"]').forEach(el => el.innerText = t.era_transitional);
    document.querySelectorAll('.era-btn[data-pos="2"]').forEach(el => el.innerText = t.era_modern);

    // Sidebar Era Steps
    document.querySelectorAll('.era-step[data-era="ancient"] span').forEach(el => el.innerText = t.era_ancient);
    document.querySelectorAll('.era-step[data-era="transitional"] span').forEach(el => el.innerText = t.era_transitional);
    document.querySelectorAll('.era-step[data-era="modern"] span').forEach(el => el.innerText = t.era_modern);

    // Search Placeholder
    const searchInput = document.getElementById('hud-search-input');
    if (searchInput) searchInput.placeholder = t.search_placeholder;

    // Bottom HUD Labels
    const hudLabels = document.querySelectorAll('.hud-data-strip .d-label');
    if (hudLabels.length >= 3) {
        hudLabels[0].innerText = t.units_label;
        hudLabels[1].innerText = t.active_site_label;
        hudLabels[2].innerText = t.protocol_label;
    }

    // Protocol Value
    const modeLabel = document.getElementById('hud-mode-label');
    if (modeLabel) {
        const modeKeys = ['ancient_protocol', 'transitional_protocol', 'modern_protocol'];
        modeLabel.innerText = t[modeKeys[window.currentMode || 0]];
    }

    // Hero Elements
    document.querySelectorAll('.t-hero-summary').forEach(el => el.innerText = t.hero_summary);
    document.querySelectorAll('.t-hero-intro').forEach(el => el.innerText = t.hero_intro);
    document.querySelectorAll('.t-hero-btn-map').forEach(el => el.innerText = t.hero_btn_map);
    document.querySelectorAll('.t-hero-btn-trans').forEach(el => el.innerText = t.hero_btn_trans);
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        mainTitle.innerHTML = t.hero_title_html;
        mainTitle.setAttribute('data-text', t.hero_title_text);
    }

    // Logo & Footer
    document.querySelectorAll('.t-logo-text a').forEach(el => el.innerText = t.logo_text);
    document.querySelectorAll('.t-hero-secure').forEach(el => el.innerText = t.hero_secure);
    document.querySelectorAll('.t-hero-center').forEach(el => el.innerText = t.hero_center);
    document.querySelectorAll('.t-footer-connect').forEach(el => el.innerText = t.footer_connect);
    document.querySelectorAll('.t-footer-sources').forEach(el => el.innerText = t.footer_sources);
    document.querySelectorAll('.t-footer-privacy').forEach(el => el.innerText = t.footer_privacy);
    document.querySelectorAll('.t-footer-copy').forEach(el => el.innerText = t.footer_copy);
    document.querySelectorAll('.t-footer-nav-title').forEach(el => el.innerText = t.footer_nav_title);
    document.querySelectorAll('.t-footer-link-1').forEach(el => el.innerText = t.footer_link_1);
    document.querySelectorAll('.t-footer-link-2').forEach(el => el.innerText = t.footer_link_2);
    document.querySelectorAll('.t-footer-link-3').forEach(el => el.innerText = t.footer_link_3);
    document.querySelectorAll('.t-footer-link-4').forEach(el => el.innerText = t.footer_link_4);
    document.querySelectorAll('.t-footer-vision-title').forEach(el => el.innerText = t.footer_vision_title);
    document.querySelectorAll('.t-footer-vision-proclamation').forEach(el => el.innerText = t.footer_vision_proclamation);
    document.querySelectorAll('.t-footer-vision-seal').forEach(el => el.innerText = t.footer_vision_seal);
    document.querySelectorAll('.t-footer-clock-label').forEach(el => el.innerText = t.footer_clock_label);
    document.querySelectorAll('.t-footer-research-label').forEach(el => el.innerText = t.footer_research_label);
    document.querySelectorAll('.t-footer-research-name').forEach(el => el.innerText = t.footer_research_name);
    document.querySelectorAll('.t-footer-dev-tag').forEach(el => el.innerText = t.footer_dev_tag);
    document.querySelectorAll('.t-footer-dev-name').forEach(el => el.innerText = t.footer_dev_name);
    document.querySelectorAll('.t-footer-dev-desc').forEach(el => el.innerText = t.footer_dev_desc);
    document.querySelectorAll('.t-footer-dev-btn').forEach(el => el.innerText = t.footer_dev_btn);

    // Quote Block Updates
    document.querySelectorAll('.t-quote-eyebrow').forEach(el => el.innerHTML = t.quote_eyebrow);
    document.querySelectorAll('.t-quote-main').forEach(el => el.innerHTML = t.quote_main);
    document.querySelectorAll('.t-quote-citation').forEach(el => el.innerHTML = t.quote_citation);

    // Layer Panel
    document.querySelectorAll('.t-layer-panel-title').forEach(el => el.innerText = t.layer_panel_title);
    document.querySelectorAll('.t-layer-era-title').forEach(el => el.innerText = t.layer_era_title);
    document.querySelectorAll('.t-layer-ancient').forEach(el => el.innerText = t.layer_ancient);
    document.querySelectorAll('.t-layer-transitional').forEach(el => el.innerText = t.layer_transitional);
    document.querySelectorAll('.t-layer-modern').forEach(el => el.innerText = t.layer_modern);
    document.querySelectorAll('.t-layer-data-title').forEach(el => el.innerText = t.layer_data_title);
    document.querySelectorAll('.t-layer-sites').forEach(el => el.innerText = t.layer_sites);
    document.querySelectorAll('.t-layer-routes').forEach(el => el.innerText = t.layer_routes);
    document.querySelectorAll('.t-layer-labels').forEach(el => el.innerText = t.layer_labels);
    document.querySelectorAll('.t-layer-theme-title').forEach(el => el.innerText = t.layer_theme_title);
    document.querySelectorAll('.t-layer-theme-parchment').forEach(el => el.innerText = t.layer_theme_parchment);
    document.querySelectorAll('.t-layer-theme-satellite').forEach(el => el.innerText = t.layer_theme_satellite);
    document.querySelectorAll('.t-layer-theme-minimal').forEach(el => el.innerText = t.layer_theme_minimal);
    document.querySelectorAll('.t-layer-opacity-title').forEach(el => el.innerText = t.layer_opacity_title);

    // Transformation Section
    document.querySelectorAll('.t-trans-sec-eyebrow').forEach(el => el.innerText = t.trans_sec_eyebrow);
    document.querySelectorAll('.t-trans-sec-title').forEach(el => el.innerText = t.trans_sec_title);
    document.querySelectorAll('.t-trans-bridge-intro').forEach(el => el.innerHTML = t.trans_bridge_intro);
    document.querySelectorAll('.t-trans-ancient-label').forEach(el => el.innerText = t.trans_ancient_label);
    document.querySelectorAll('.t-trans-ancient-unit').forEach(el => el.innerText = t.trans_ancient_unit);
    document.querySelectorAll('.t-trans-modern-label').forEach(el => el.innerText = t.trans_modern_label);
    document.querySelectorAll('.t-trans-modern-unit').forEach(el => el.innerText = t.trans_modern_unit);
    document.querySelectorAll('.t-trans-models-title').forEach(el => el.innerText = t.trans_models_title);
    document.querySelectorAll('.t-comp-on').forEach(el => el.innerText = t.comp_on);

    // Detailed t_num translation
    for (let i = 1; i <= 3; i++) {
        const el = document.getElementById(`t_num_${i}`);
        if (el) el.innerText = t[`t_num_${i}`];
    }

    // Regional Ledgers
    document.querySelectorAll('.t-ledger-upper-title').forEach(el => el.innerText = t.ledger_upper_title);
    document.querySelectorAll('.t-ledger-lower-title').forEach(el => el.innerText = t.ledger_lower_title);
    document.querySelectorAll('.t-l-upper-n1-old').forEach(el => el.innerText = t.l_upper_n1_old);
    document.querySelectorAll('.t-l-upper-n1-new').forEach(el => el.innerText = t.l_upper_n1_new);
    document.querySelectorAll('.t-l-upper-n2-old').forEach(el => el.innerText = t.l_upper_n2_old);
    document.querySelectorAll('.t-l-upper-n2-new').forEach(el => el.innerText = t.l_upper_n2_new);
    document.querySelectorAll('.t-l-upper-n3-old').forEach(el => el.innerText = t.l_upper_n3_old);
    document.querySelectorAll('.t-l-upper-n3-new').forEach(el => el.innerText = t.l_upper_n3_new);
    document.querySelectorAll('.t-l-upper-n4-old').forEach(el => el.innerText = t.l_upper_n4_old);
    document.querySelectorAll('.t-l-upper-n4-new').forEach(el => el.innerText = t.l_upper_n4_new);
    document.querySelectorAll('.t-l-lower-n1-old').forEach(el => el.innerText = t.l_lower_n1_old);
    document.querySelectorAll('.t-l-lower-n1-new').forEach(el => el.innerText = t.l_lower_n1_new);
    document.querySelectorAll('.t-l-lower-n2-old').forEach(el => el.innerText = t.l_lower_n2_old);
    document.querySelectorAll('.t-l-lower-n2-new').forEach(el => el.innerText = t.l_lower_n2_new);
    document.querySelectorAll('.t-l-lower-n3-old').forEach(el => el.innerText = t.l_lower_n3_old);
    document.querySelectorAll('.t-l-lower-n3-new').forEach(el => el.innerText = t.l_lower_n3_new);
    document.querySelectorAll('.t-l-lower-n4-old').forEach(el => el.innerText = t.l_lower_n4_old);
    document.querySelectorAll('.t-l-lower-n4-new').forEach(el => el.innerText = t.l_lower_n4_new);

    // Intel Tableau
    document.querySelectorAll('.t-intel-meta-label-1').forEach(el => el.innerText = t.intel_meta_label_1);
    document.querySelectorAll('.t-intel-meta-val-1').forEach(el => el.innerText = t.intel_meta_val_1);
    document.querySelectorAll('.t-intel-meta-label-2').forEach(el => el.innerText = t.intel_meta_label_2);
    document.querySelectorAll('.t-intel-meta-val-2').forEach(el => el.innerText = t.intel_meta_val_2);
    document.querySelectorAll('.t-intel-b1-title').forEach(el => el.innerText = t.intel_b1_title);
    document.querySelectorAll('.t-intel-b1-desc').forEach(el => el.innerText = t.intel_b1_desc);
    document.querySelectorAll('.t-intel-b1-tag1').forEach(el => el.innerText = t.intel_b1_tag1);
    document.querySelectorAll('.t-intel-b1-tag2').forEach(el => el.innerText = t.intel_b1_tag2);
    document.querySelectorAll('.t-intel-b2-title').forEach(el => el.innerText = t.intel_b2_title);
    document.querySelectorAll('.t-intel-b2-desc').forEach(el => el.innerText = t.intel_b2_desc);
    document.querySelectorAll('.t-intel-b2-tag1').forEach(el => el.innerText = t.intel_b2_tag1);
    document.querySelectorAll('.t-intel-b2-tag2').forEach(el => el.innerText = t.intel_b2_tag2);
    document.querySelectorAll('.t-intel-b3-title').forEach(el => el.innerText = t.intel_b3_title);
    document.querySelectorAll('.t-intel-b3-desc').forEach(el => el.innerText = t.intel_b3_desc);
    document.querySelectorAll('.t-intel-b3-tag1').forEach(el => el.innerText = t.intel_b3_tag1);
    document.querySelectorAll('.t-intel-b3-tag2').forEach(el => el.innerText = t.intel_b3_tag2);

    // Research Codex
    document.querySelectorAll('.t-codex-tag-main').forEach(el => el.innerText = t.codex_tag_main);
    document.querySelectorAll('.t-codex-tag-side').forEach(el => el.innerText = t.codex_tag_side);
    document.querySelectorAll('.t-codex-title-main').forEach(el => el.innerText = t.codex_title_main);
    document.querySelectorAll('.t-codex-title-side').forEach(el => el.innerText = t.codex_title_side);
    document.querySelectorAll('.t-etym-lang-ancient').forEach(el => el.innerText = t.etym_lang_ancient);
    document.querySelectorAll('.t-etym-lang-modern').forEach(el => el.innerText = t.etym_lang_modern);
    document.querySelectorAll('.t-etym-n1-old').forEach(el => el.innerText = t.etym_n1_old);
    document.querySelectorAll('.t-etym-n1-new').forEach(el => el.innerText = t.etym_n1_new);
    document.querySelectorAll('.t-etym-n2-old').forEach(el => el.innerText = t.etym_n2_old);
    document.querySelectorAll('.t-etym-n2-new').forEach(el => el.innerText = t.etym_n2_new);
    document.querySelectorAll('.t-etym-n3-old').forEach(el => el.innerText = t.etym_n3_old);
    document.querySelectorAll('.t-etym-n3-new').forEach(el => el.innerText = t.etym_n3_new);
    document.querySelectorAll('.t-source-1-title').forEach(el => el.innerText = t.source_1_title);
    document.querySelectorAll('.t-source-1-desc').forEach(el => el.innerText = t.source_1_desc);
    document.querySelectorAll('.t-source-2-title').forEach(el => el.innerText = t.source_2_title);
    document.querySelectorAll('.t-source-2-desc').forEach(el => el.innerText = t.source_2_desc);

    // Era Journey Section
    document.querySelectorAll('.t-journey-eyebrow').forEach(el => el.innerText = t.journey_eyebrow);
    document.querySelectorAll('.t-journey-title').forEach(el => el.innerText = t.journey_title);
    document.querySelectorAll('.t-journey-desc').forEach(el => el.innerText = t.journey_desc);

    // Era Background Text
    document.querySelectorAll('.t-ancient-bg-text').forEach(el => el.innerHTML = t.ancient_bg_text);
    document.querySelectorAll('.t-trans-bg-text').forEach(el => el.innerHTML = t.trans_bg_text);
    document.querySelectorAll('.t-modern-bg-text').forEach(el => el.innerHTML = t.modern_bg_text);

    // Ancient Era Monument
    document.querySelectorAll('.t-ancient-tag').forEach(el => el.innerText = t.ancient_tag);
    document.querySelectorAll('.t-ancient-years').forEach(el => el.innerText = t.ancient_years);
    document.querySelectorAll('.t-ancient-title').forEach(el => {
        const subtitle = el.querySelector('.t-ancient-subtitle');
        const subtitleText = subtitle ? subtitle.outerHTML : '';
        el.innerHTML = t.ancient_title + ' ' + subtitleText;
    });
    document.querySelectorAll('.t-ancient-subtitle').forEach(el => el.innerText = t.ancient_subtitle);
    document.querySelectorAll('.t-ancient-desc').forEach(el => el.innerText = t.ancient_desc);
    document.querySelectorAll('.t-ancient-stat-1-val').forEach(el => el.innerText = t.ancient_stat_1_val);
    document.querySelectorAll('.t-ancient-stat-1-lbl').forEach(el => el.innerText = t.ancient_stat_1_lbl);
    document.querySelectorAll('.t-ancient-stat-2-val').forEach(el => el.innerText = t.ancient_stat_2_val);
    document.querySelectorAll('.t-ancient-stat-2-lbl').forEach(el => el.innerText = t.ancient_stat_2_lbl);
    document.querySelectorAll('.t-ancient-stat-3-val').forEach(el => el.innerText = t.ancient_stat_3_val);
    document.querySelectorAll('.t-ancient-stat-3-lbl').forEach(el => el.innerText = t.ancient_stat_3_lbl);

    // Transitional Era Monument
    document.querySelectorAll('.t-trans-tag').forEach(el => el.innerText = t.trans_tag);
    document.querySelectorAll('.t-trans-years').forEach(el => el.innerText = t.trans_years);
    document.querySelectorAll('.t-trans-title').forEach(el => {
        const subtitle = el.querySelector('.t-trans-subtitle');
        const subtitleText = subtitle ? subtitle.outerHTML : '';
        el.innerHTML = t.trans_title + ' ' + subtitleText;
    });
    document.querySelectorAll('.t-trans-subtitle').forEach(el => el.innerText = t.trans_subtitle);
    document.querySelectorAll('.t-trans-desc').forEach(el => el.innerText = t.trans_desc);
    document.querySelectorAll('.t-trans-stat-1-val').forEach(el => el.innerText = t.trans_stat_1_val);
    document.querySelectorAll('.t-trans-stat-1-lbl').forEach(el => el.innerText = t.trans_stat_1_lbl);
    document.querySelectorAll('.t-trans-stat-2-val').forEach(el => el.innerText = t.trans_stat_2_val);
    document.querySelectorAll('.t-trans-stat-2-lbl').forEach(el => el.innerText = t.trans_stat_2_lbl);
    document.querySelectorAll('.t-trans-stat-3-val').forEach(el => el.innerText = t.trans_stat_3_val);
    document.querySelectorAll('.t-trans-stat-3-lbl').forEach(el => el.innerText = t.trans_stat_3_lbl);

    // Modern Era Monument
    document.querySelectorAll('.t-modern-tag').forEach(el => el.innerText = t.modern_tag);
    document.querySelectorAll('.t-modern-years').forEach(el => el.innerText = t.modern_years);
    document.querySelectorAll('.t-modern-title').forEach(el => {
        const subtitle = el.querySelector('.t-modern-subtitle');
        const subtitleText = subtitle ? subtitle.outerHTML : '';
        el.innerHTML = t.modern_title + ' ' + subtitleText;
    });
    document.querySelectorAll('.t-modern-subtitle').forEach(el => el.innerText = t.modern_subtitle);
    document.querySelectorAll('.t-modern-desc').forEach(el => el.innerText = t.modern_desc);
    document.querySelectorAll('.t-modern-stat-1-val').forEach(el => el.innerText = t.modern_stat_1_val);
    document.querySelectorAll('.t-modern-stat-1-lbl').forEach(el => el.innerText = t.modern_stat_1_lbl);
    document.querySelectorAll('.t-modern-stat-2-val').forEach(el => el.innerText = t.modern_stat_2_val);
    document.querySelectorAll('.t-modern-stat-2-lbl').forEach(el => el.innerText = t.modern_stat_2_lbl);
    document.querySelectorAll('.t-modern-stat-3-val').forEach(el => el.innerText = t.modern_stat_3_val);
    document.querySelectorAll('.t-modern-stat-3-lbl').forEach(el => el.innerText = t.modern_stat_3_lbl);

    // Compass
    document.querySelectorAll('.t-compass-n').forEach(el => el.innerText = t.compass_n);
    document.querySelectorAll('.t-compass-e').forEach(el => el.innerText = t.compass_e);
    document.querySelectorAll('.t-compass-s').forEach(el => el.innerText = t.compass_s);
    document.querySelectorAll('.t-compass-w').forEach(el => el.innerText = t.compass_w);

    // Footer Grid
    document.querySelectorAll('.t-footer-nav-title').forEach(el => el.innerText = t.footer_nav_title);
    document.querySelectorAll('.t-footer-link-1').forEach(el => el.innerText = t.footer_link_1);
    document.querySelectorAll('.t-footer-link-2').forEach(el => el.innerText = t.footer_link_2);
    document.querySelectorAll('.t-footer-link-3').forEach(el => el.innerText = t.footer_link_3);
    document.querySelectorAll('.t-footer-link-4').forEach(el => el.innerText = t.footer_link_4);

    document.querySelectorAll('.t-footer-timeline-title').forEach(el => el.innerText = t.footer_timeline_title);
    document.querySelectorAll('.t-footer-era-1').forEach(el => {
        const tag = el.querySelector('.era-tag');
        const tagText = tag ? tag.innerText : '';
        el.innerText = t.footer_era_1;
        if (tag) {
            const era1Parts = t.footer_era_1.split(' ');
            tag.innerText = era1Parts[0];
            el.innerHTML = tag.outerHTML + ' ' + era1Parts.slice(1).join(' ');
        }
    });
    document.querySelectorAll('.t-footer-era-2').forEach(el => {
        const tag = el.querySelector('.era-tag');
        if (tag) {
            const era2Parts = t.footer_era_2.split(' ');
            tag.innerText = era2Parts[0];
            el.innerHTML = tag.outerHTML + ' ' + era2Parts.slice(1).join(' ');
        }
    });
    document.querySelectorAll('.t-footer-era-3').forEach(el => {
        const tag = el.querySelector('.era-tag');
        if (tag) {
            const era3Parts = t.footer_era_3.split(' ');
            tag.innerText = era3Parts[0];
            el.innerHTML = tag.outerHTML + ' ' + era3Parts.slice(1).join(' ');
        }
    });

    document.querySelectorAll('.t-footer-doc-title').forEach(el => el.innerText = t.footer_doc_title);
    document.querySelectorAll('.t-footer-doc-1').forEach(el => el.innerText = t.footer_doc_1);
    document.querySelectorAll('.t-footer-doc-2').forEach(el => el.innerText = t.footer_doc_2);
    document.querySelectorAll('.t-footer-doc-3').forEach(el => el.innerText = t.footer_doc_3);

    document.querySelectorAll('.t-footer-refs-title').forEach(el => el.innerText = t.footer_refs_title);
    document.querySelectorAll('.t-ref-1-auth').forEach(el => el.innerText = t.ref_1_auth);
    document.querySelectorAll('.t-ref-1-work').forEach(el => el.innerText = t.ref_1_work);
    document.querySelectorAll('.t-ref-2-auth').forEach(el => el.innerText = t.ref_2_auth);
    document.querySelectorAll('.t-ref-2-work').forEach(el => el.innerText = t.ref_2_work);

    // Legacy Impact
    document.querySelectorAll('.t-legacy-bg').forEach(el => el.innerText = t.legacy_bg);
    document.querySelectorAll('.t-legacy-bg-1').forEach(el => el.innerText = t.legacy_bg_1);
    document.querySelectorAll('.t-legacy-bg-2').forEach(el => el.innerText = t.legacy_bg_2);
    document.querySelectorAll('.t-legacy-eyebrow').forEach(el => el.innerText = t.legacy_eyebrow);
    document.querySelectorAll('.t-legacy-text').forEach(el => el.innerText = t.legacy_text);
    document.querySelectorAll('.t-blueprint-label').forEach(el => el.innerText = t.blueprint_label);
    document.querySelectorAll('.t-blueprint-title').forEach(el => el.innerText = t.blueprint_title);
    document.querySelectorAll('.t-blueprint-desc').forEach(el => el.innerText = t.blueprint_desc);

    // Pillars Gallery
    document.querySelectorAll('.t-pillars-bg').forEach(el => el.innerText = t.pillars_bg);
    document.querySelectorAll('.t-pillars-bg-1').forEach(el => el.innerText = t.pillars_bg_1);
    document.querySelectorAll('.t-pillars-bg-2').forEach(el => el.innerText = t.pillars_bg_2);
    document.querySelectorAll('.t-pillars-eyebrow').forEach(el => el.innerText = t.pillars_eyebrow);
    document.querySelectorAll('.t-pillar-1-tag').forEach(el => el.innerText = t.pillar_1_tag);
    document.querySelectorAll('.t-pillar-1-name').forEach(el => el.innerText = t.pillar_1_name);
    document.querySelectorAll('.t-pillar-1-desc').forEach(el => el.innerText = t.pillar_1_desc);
    document.querySelectorAll('.t-pillar-1-era').forEach(el => el.innerText = t.pillar_1_era);
    document.querySelectorAll('.t-pillar-1-loc').forEach(el => el.innerText = t.pillar_1_loc);
    document.querySelectorAll('.t-pillar-2-tag').forEach(el => el.innerText = t.pillar_2_tag);
    document.querySelectorAll('.t-pillar-2-name').forEach(el => el.innerText = t.pillar_2_name);
    document.querySelectorAll('.t-pillar-2-desc').forEach(el => el.innerText = t.pillar_2_desc);
    document.querySelectorAll('.t-pillar-2-era').forEach(el => el.innerText = t.pillar_2_era);
    document.querySelectorAll('.t-pillar-2-loc').forEach(el => el.innerText = t.pillar_2_loc);
    document.querySelectorAll('.t-pillar-3-tag').forEach(el => el.innerText = t.pillar_3_tag);
    document.querySelectorAll('.t-pillar-3-name').forEach(el => el.innerText = t.pillar_3_name);
    document.querySelectorAll('.t-pillar-3-desc').forEach(el => el.innerText = t.pillar_3_desc);
    document.querySelectorAll('.t-pillar-3-era').forEach(el => el.innerText = t.pillar_3_era);
    document.querySelectorAll('.t-pillar-3-loc').forEach(el => el.innerText = t.pillar_3_loc);
    document.querySelectorAll('.t-pillar-4-tag').forEach(el => el.innerText = t.pillar_4_tag);
    document.querySelectorAll('.t-pillar-4-name').forEach(el => el.innerText = t.pillar_4_name);
    document.querySelectorAll('.t-pillar-4-desc').forEach(el => el.innerText = t.pillar_4_desc);
    document.querySelectorAll('.t-pillar-4-era').forEach(el => el.innerText = t.pillar_4_era);
    document.querySelectorAll('.t-pillar-4-loc').forEach(el => el.innerText = t.pillar_4_loc);
    document.querySelectorAll('.t-pillar-5-tag').forEach(el => el.innerText = t.pillar_5_tag);
    document.querySelectorAll('.t-pillar-5-name').forEach(el => el.innerText = t.pillar_5_name);
    document.querySelectorAll('.t-pillar-5-desc').forEach(el => el.innerText = t.pillar_5_desc);
    document.querySelectorAll('.t-pillar-5-era').forEach(el => el.innerText = t.pillar_5_era);
    document.querySelectorAll('.t-pillar-5-loc').forEach(el => el.innerText = t.pillar_5_loc);
    document.querySelectorAll('.t-pillar-6-tag').forEach(el => el.innerText = t.pillar_6_tag);
    document.querySelectorAll('.t-pillar-6-name').forEach(el => el.innerText = t.pillar_6_name);
    document.querySelectorAll('.t-pillar-6-desc').forEach(el => el.innerText = t.pillar_6_desc);
    document.querySelectorAll('.t-pillar-6-era').forEach(el => el.innerText = t.pillar_6_era);
    document.querySelectorAll('.t-pillar-6-loc').forEach(el => el.innerText = t.pillar_6_loc);

    // Welcome Screen Features
    document.querySelectorAll('.t-feature-1-title').forEach(el => el.innerText = t.feature_1_title);
    document.querySelectorAll('.t-feature-1-desc').forEach(el => el.innerText = t.feature_1_desc);
    document.querySelectorAll('.t-feature-2-title').forEach(el => el.innerText = t.feature_2_title);
    document.querySelectorAll('.t-feature-2-desc').forEach(el => el.innerText = t.feature_2_desc);
    document.querySelectorAll('.t-feature-3-title').forEach(el => el.innerText = t.feature_3_title);
    document.querySelectorAll('.t-feature-3-desc').forEach(el => el.innerText = t.feature_3_desc);
    document.querySelectorAll('.t-feature-4-title').forEach(el => el.innerText = t.feature_4_title);
    document.querySelectorAll('.t-feature-4-desc').forEach(el => el.innerText = t.feature_4_desc);
    document.querySelectorAll('.t-here-bubble').forEach(el => el.innerText = t.here_bubble);
    document.querySelectorAll('.t-bot-help').forEach(el => el.innerText = t.bot_help);
    const botEl = document.getElementById('gala-bot');
    if (botEl) botEl.title = t.bot_help;

    // Welcome Screen & General UI
    document.querySelectorAll('.t-welcome-title').forEach(el => el.innerText = t.welcome_title);
    document.querySelectorAll('.t-welcome-desc').forEach(el => el.innerText = t.welcome_desc);
    document.querySelectorAll('.t-welcome-badge').forEach(el => el.innerText = t.welcome_badge);
    document.querySelectorAll('.t-protocol-label').forEach(el => el.innerText = t.protocol_label);
    document.querySelectorAll('.t-btn-start').forEach(el => el.innerText = t.btn_start);

    // Section Titles
    document.querySelectorAll('.t-legacy-title').forEach(el => el.innerText = t.legacy_title);
    document.querySelectorAll('.t-pillars-title').forEach(el => el.innerText = t.pillars_title);
    document.querySelectorAll('.t-stat-years').forEach(el => el.innerText = t.stat_years);
    document.querySelectorAll('.t-stat-regions').forEach(el => el.innerText = t.stat_regions);

    // Assistant Bot
    const botBubble = document.querySelector('.t-bot-help');
    if (botBubble) botBubble.innerText = lang === 'ar' ? 'تحتاج مساعدة؟' : (lang === 'en' ? 'Need help?' : 'Hilfe benötigt?');
    const botTrigger = document.getElementById('gala-bot');
    if (botTrigger) botTrigger.title = lang === 'ar' ? 'تحتاج مساعدة؟' : (lang === 'en' ? 'Need help?' : 'Hilfe benötigt?');

    // HUD Tooltips
    const tooltipMap = {
        'btn-zoom-in': t.tooltip_zoom_in,
        'btn-zoom-out': t.tooltip_zoom_out,
        'btn-layer-toggle': t.tooltip_layers,
        'btn-comparison': t.tooltip_compare,
        'help-trigger': t.tooltip_help
    };
    Object.keys(tooltipMap).forEach(key => {
        const el = document.getElementById(key) || document.querySelector(`.${key}`);
        if (el) {
            el.title = tooltipMap[key];
            if (el.hasAttribute('data-label')) el.setAttribute('data-label', tooltipMap[key]);
        }
    });

    // Fix arrow direction in welcome button
    const welcomeArrow = document.querySelector('.btn-arrow');
    if (welcomeArrow) welcomeArrow.innerText = lang === 'ar' ? '←' : '→';

    // Refresh detail panel if open
    if (window.selectedRegionId) {
        window.showRegionDetails(window.selectedRegionId);
    } else if (!comparisonMode) {
        // Update placeholder text in current language
        const emptyTitle = panelPlaceholder?.querySelector('.empty-title');
        const emptySub = panelPlaceholder?.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = t.empty_title_default;
        if (emptySub) emptySub.textContent = t.empty_sub_default;
    }

    // Hieroglyph Translator Section
    document.querySelectorAll('.t-hiero-title').forEach(el => el.innerText = t.hiero_title);
    document.querySelectorAll('.t-hiero-subtitle').forEach(el => el.innerText = t.hiero_subtitle);
    document.querySelectorAll('.hiero-eyebrow').forEach(el => el.innerText = t.hiero_eyebrow);

    const hInputLabel = document.getElementById('hiero-input-label');
    const hOutputLabel = document.getElementById('hiero-output-label');
    const hInput = document.getElementById('hiero-input');
    const hOutput = document.getElementById('hiero-output');
    const hRefBtn = document.querySelector('.hiero-ref-toggle span');
    const hBreakdownLabel = document.querySelector('.hiero-breakdown-header span:last-child');
    const hPlaceholder = document.querySelector('.hiero-placeholder');

    const hDir = window.hieroDirection || 'en-to-hiero';
    const fromLabel = document.getElementById('hiero-from-label');
    const toLabel = document.getElementById('hiero-to-label');

    if (hInputLabel) hInputLabel.innerText = hDir === 'en-to-hiero' ? t.hiero_input_label : t.hiero_output_label;
    if (hOutputLabel) hOutputLabel.innerText = hDir === 'en-to-hiero' ? t.hiero_output_label : t.hiero_input_label;
    if (hInput) hInput.placeholder = hDir === 'en-to-hiero' ? t.hiero_input_ph_en : t.hiero_input_ph_hiero;

    if (fromLabel) {
        fromLabel.innerHTML = `<span class="lang-dot"></span> ${hDir === 'en-to-hiero' ? t.hiero_lang_en : '𓊹𓌃 ' + t.hiero_lang_hiero}`;
    }
    if (toLabel) {
        toLabel.innerHTML = `<span class="lang-dot"></span> ${hDir === 'en-to-hiero' ? '𓊹𓌃 ' + t.hiero_lang_hiero : t.hiero_lang_en}`;
    }

    if (hRefBtn) hRefBtn.innerText = t.hiero_ref_btn;
    if (hBreakdownLabel) hBreakdownLabel.innerText = t.hiero_breakdown;
    if (hPlaceholder) hPlaceholder.innerText = t.hiero_placeholder;

    document.querySelectorAll('.t-copy-text').forEach(el => el.innerText = t.copy);

    // Reset floating mouse label specifically to pick up new translations seamlessly
    if (typeof resetBubble === 'function' && typeof comparisonMode !== 'undefined' && !comparisonMode) {
        resetBubble();
    }
};

// Modified Region Data structure for translation support (partial demonstration)
const regionsData = {
    luxor: {
        ar: {
            ancient: { name: "واست (طيبة)", capital: "طيبة", detail: "عاصمة مصر العليا ومقر عبادة آمون. موطن معابد الكرنك والأقصر ووادي الملوك.", period: "مصر القديمة", label: "واست", symbol: "𓌕 (صولجان واست)", ruler: "رمسيس الثاني / آمون" },
            transitional: { name: "إقليم الأقصر", capital: "الأقصر", detail: "أصبحت مركزاً إدارياً في عهد محمد علي. استمرت كمركز سياحي وديني هام.", period: "العصر الإسلامي/العثماني", label: "الأقصر" },
            modern: { name: "محافظة الأقصر", capital: "الأقصر", detail: "أُنشئت كمحافظة مستقلة عام ٢٠٠٩. مركز سياحي عالمي يضم ثلث آثار العالم بتعداد ١.٣ مليون نسمة.", period: "مصر الحديثة", stats: "السكان: ~١.٣ مليون", label: "الأقصر" }
        },
        en: {
            ancient: { name: "Waset (Thebes)", capital: "Thebes", detail: "Capital of Upper Egypt and seat of Amun worship. Home to Karnak, Luxor temples, and Valley of the Kings.", period: "Ancient Egypt" },
            transitional: { name: "Luxor Region", capital: "Luxor", detail: "Became an administrative center during internal reforms. Remained a vital religious and tourism hub.", period: "Islamic/Ottoman" },
            modern: { name: "Luxor Governorate", capital: "Luxor", detail: "Established as an independent governorate in 2009. World-class tourism center with iconic monuments and 1.3M population.", period: "Modern Egypt" }
        },
        de: {
            ancient: { name: "Waset (Theben)", capital: "Theben", detail: "Hauptstadt von Oberägypten und Sitz des Amun-Kultes. Heimat von Karnak, Luxor und dem Tal der Könige.", period: "Altes Ägypten" },
            transitional: { name: "Region Luxor", capital: "Luxor", detail: "Wurde während der Verwaltungsreformen zu einem Zentrum. Blieb eine wichtige religiöse Stätte.", period: "Islamisch/Osmanisch" },
            modern: { name: "Gouvernement Luxor", capital: "Luxor", detail: "2009 als eigenständiges Gouvernement gegründet. Weltweites Tourismuszentrum mit 1,3 Mio. Einwohnern.", period: "Modernes Ägypten" }
        }
    },
    aswan: {
        ar: {
            ancient: { name: "تا-سيتي", capital: "سوينيت (أسوان)", detail: "أول أقاليم مصر العليا. بوابة مصر الجنوبية ومركز تجارة الجرانيت والعاج مع النوبة.", period: "مصر القديمة", label: "تا-سيتي", symbol: "𓃰 (الفيل النوبي)", ruler: "خنوم / منتوهوتب" },
            transitional: { name: "إقليم أسوان", capital: "أسوان", detail: "نقطة دفاع حدودية استراتيجية في العصر الإسلامي. موقع حملات محمد علي جنوباً.", period: "العصر الإسلامي/العثماني", label: "أسوان" },
            modern: { name: "محافظة أسوان", capital: "أسوان", detail: "موطن السد العالي الذي يتحكم في فيضان النيل. تضم معبد فيلة ومناظر طبيعية خلابة.", period: "مصر الحديثة", stats: "السكان: ~١.٦ مليون", label: "أسوان" }
        },
        en: {
            ancient: { name: "Ta-Seti", capital: "Swenett (Aswan)", detail: "The first Nome of Upper Egypt. Gateway to the south and center for granite and ivory trade.", period: "Ancient Egypt" },
            transitional: { name: "Aswan Region", capital: "Aswan", detail: "Strategic border defense point in the Islamic era. Launchpad for southern expeditions.", period: "Islamic/Ottoman" },
            modern: { name: "Aswan Governorate", capital: "Aswan", detail: "Home to the High Dam controlling the Nile flood. Features Philae temple and stunning landscapes.", period: "Modern Egypt" }
        },
        de: {
            ancient: { name: "Ta-Seti", capital: "Swenett (Assuan)", detail: "Der erste Gau von Oberägypten. Tor zum Süden und Zentrum des Granit- und Elfenbeinhandels.", period: "Altes Ägypten" },
            transitional: { name: "Region Assuan", capital: "Assuan", detail: "Strategischer Grenzverteidigungspunkt in der islamischen Ära.", period: "Islamisch/Osmanisch" },
            modern: { name: "Gouvernement Assuan", capital: "Assuan", detail: "Heimat des Hochdamms, der die Nilflut kontrolliert. Beherbergt den Philae-Tempel.", period: "Modernes Ägypten" }
        }
    },
    cairo: {
        ar: {
            ancient: { name: "إنب-حدج (منف)", capital: "منف", detail: "مقر أول عاصمة موحدة لمصر. مركز عبادة بتاح وحرف صناعة الحجر.", period: "مصر القديمة", label: "منف" },
            transitional: { name: "القاهرة المعزية", capital: "القاهرة", detail: "أسسها الفاطميون عام ٩٦٩م. أصبحت أعظم مدن العالم الإسلامي في عهد المماليك.", period: "العصر الإسلامي/العثماني", label: "القاهرة" },
            modern: { name: "محافظة القاهرة", capital: "القاهرة", detail: "عاصمة جمهورية مصر العربية وأكبر مدينة في أفريقيا والشرق الأوسط. مركز سياسي وثقافي واقتصادي.", period: "مصر الحديثة", stats: "السكان: ~١٠.١ مليون", label: "القاهرة" }
        },
        en: {
            ancient: { name: "Ineb-Hedj (Memphis)", capital: "Memphis", detail: "Seat of the first unified capital of Egypt. Center for Ptah worship and stone craftsmanship.", period: "Ancient Egypt" },
            transitional: { name: "Al-Qahira", capital: "Cairo", detail: "Founded by Fatimids in 969 AD. Became the greatest city of the Islamic world under Mamluks.", period: "Islamic/Ottoman" },
            modern: { name: "Cairo Governorate", capital: "Cairo", detail: "Capital of Egypt and largest city in Africa and Middle East. Political and economic hub.", period: "Modern Egypt" }
        },
        de: {
            ancient: { name: "Ineb-Hedj (Memphis)", capital: "Memphis", detail: "Sitz der ersten vereinigten Hauptstadt Ägyptens. Zentrum der Ptah-Verehrung.", period: "Altes Ägypten" },
            transitional: { name: "Al-Qahira (Kairo)", capital: "Kairo", detail: "Gegründet von den Fatimiden im Jahr 969 n. Chr. Wurde zur größten Stadt der islamischen Welt.", period: "Islamisch/Osmanisch" },
            modern: { name: "Gouvernement Kairo", capital: "Kairo", detail: "Hauptstadt Ägyptens und größte Stadt in Afrika. Politisches und wirtschaftliches Zentrum.", period: "Modernes Ägypten" }
        }
    },
    alexandria: {
        ar: {
            ancient: { name: "راقودة", capital: "الإسكندرية", detail: "أسسها الإسكندر الأكبر عام ٣٣١ ق.م. موطن المنارة والمكتبة القديمة، عاصمة مصر البطلمية.", period: "العصر البطلمي/الروماني", label: "راقودة" },
            transitional: { name: "ثغر الإسكندرية", capital: "الإسكندرية", detail: "ميناء تجاري رئيسي في العصر الإسلامي. شهدت حملة نابليون عام ١٧٩٨.", period: "العصر الإسلامي/العثماني", label: "الإسكندرية" },
            modern: { name: "محافظة الإسكندرية", capital: "الإسكندرية", detail: "ثاني أكبر مدن مصر والميناء الرئيسي على المتوسط. مركز صناعي وثقافي وسياحي.", period: "مصر الحديثة", stats: "السكان: ~٥.٤ مليون", label: "الإسكندرية" }
        },
        en: {
            ancient: { name: "Rakote", capital: "Alexandria", detail: "Founded by Alexander the Great in 331 BC. Home to the Lighthouse and Ancient Library.", period: "Ptolemaic/Roman" },
            transitional: { name: "Alexandria Port", capital: "Alexandria", detail: "Major commercial port in the Islamic era. Witnessed Napoleon's campaign in 1798.", period: "Islamic/Ottoman" },
            modern: { name: "Alexandria Governorate", capital: "Alexandria", detail: "Egypt's second city and main port on the Mediterranean. Industrial and cultural hub.", period: "Modern Egypt", stats: "Pop: ~5.4M" }
        },
        de: {
            ancient: { name: "Rakotis", capital: "Alexandria", detail: "Gegründet von Alexander dem Großen 331 v. Chr. Heimat des Leuchtturms.", period: "Ptolemäisch/Römisch" },
            transitional: { name: "Hafen Alexandria", capital: "Alexandria", detail: "Wichtiger Handelshafen in der islamischen Ära.", period: "Islamisch/Osmanisch" },
            modern: { name: "Gouvernement Alexandria", capital: "Alexandria", detail: "Zweitgrößte Stadt Ägyptens und Hauptpunkt am Mittelmeer.", period: "Modernes Ägypten", stats: "Bev: ~5.4 Mio" }
        }
    },
    giza: {
        ar: {
            ancient: { name: "خنتي-إابت", capital: "إنب-حدج", detail: "موطن أهرامات الجيزة وأبو الهول. مقبرة ملكية لفراعنة الأسرة الرابعة.", period: "مصر القديمة", label: "خنتي-إابت" },
            transitional: { name: "إقليم الجيزة", capital: "الجيزة", detail: "منطقة زراعية خصبة على الضفة الغربية للنيل. شهدت معركة الأهرام عام ١٧٩٨.", period: "العصر الإسلامي/العثماني", label: "الجيزة" },
            modern: { name: "محافظة الجيزة", capital: "الجيزة", detail: "ثالث أكبر محافظات مصر سكانياً. تضم الأهرامات والمتحف المصري الكبير.", period: "مصر الحديثة", stats: "السكان: ~٩.٣ مليون", label: "الجيزة" }
        },
        en: {
            ancient: { name: "Khenty-Iabet", capital: "Ineb-Hedj", detail: "Home to the Giza Pyramids and Great Sphinx. Royal necropolis for the 4th Dynasty.", period: "Ancient Egypt" },
            transitional: { name: "Giza Region", capital: "Giza", detail: "Fertile region on the west bank. Site of the Battle of the Pyramids in 1798.", period: "Islamic/Ottoman" },
            modern: { name: "Giza Governorate", capital: "Giza", detail: "Egypt's third largest governorate. Home to the Pyramids and Grand Egyptian Museum.", period: "Modern Egypt", stats: "Pop: ~9.3M" }
        },
        de: {
            ancient: { name: "Chenti-Iabet", capital: "Ineb-Hedj", detail: "Heimat der Pyramiden von Gizeh und der Großen Sphinx.", period: "Altes Ägypten" },
            transitional: { name: "Region Gizeh", capital: "Gizeh", detail: "Wichtiges landwirtschaftliches Gebiet am Westufer.", period: "Islamisch/Osmanisch" },
            modern: { name: "Gouvernement Gizeh", capital: "Gizeh", detail: "Drittgrößtes Gouvernement. Heimat der Pyramiden.", period: "Modernes Ägypten", stats: "Bev: ~9.3 Mio" }
        }
    },
    ismailia: {
        ancient: { name: "أرض جشن", capital: "بر-عتوم", detail: "منطقة عبور تاريخية بين مصر وسيناء. ورد ذكرها في النصوص المصرية القديمة.", period: "مصر القديمة", label: "جشن" },
        transitional: { name: "منطقة القنال", capital: "الإسماعيلية", detail: "أُنشئت كمركز لإدارة حفر قناة السويس في عهد الخديوي إسماعيل.", period: "العصر الحديث المبكر", label: "الإسماعيلية" },
        modern: { name: "محافظة الإسماعيلية", capital: "الإسماعيلية", detail: "مقر هيئة قناة السويس. مدينة حدائق خضراء تُلقب بعروس القنال.", period: "مصر الحديثة", stats: "السكان: ~١.٤ مليون", label: "الإسماعيلية" }
    },
    asyut: {
        ancient: { name: "ساوتي", capital: "ساوتي (أسيوط)", detail: "مركز عبادة الإله ويب-واوت. لعبت دوراً حاسماً في حروب التوحيد.", period: "مصر القديمة", label: "ساوتي" },
        transitional: { name: "إقليم أسيوط", capital: "أسيوط", detail: "مركز إداري وتجاري رئيسي في صعيد مصر. نقطة انطلاق قوافل درب الأربعين.", period: "العصر الإسلامي/العثماني", label: "أسيوط" },
        modern: { name: "محافظة أسيوط", capital: "أسيوط", detail: "أكبر محافظات الصعيد. تضم جامعة أسيوط وسد أسيوط على النيل.", period: "مصر الحديثة", stats: "السكان: ~٤.٧ مليون", label: "أسيوط" }
    },
    qena: {
        ancient: { name: "تا-نترت", capital: "إيونت (دندرة)", detail: "موطن معبد حتحور في دندرة. مركز ديني هام لعبادة الإلهة حتحور.", period: "مصر القديمة", label: "تا-نترت" },
        transitional: { name: "إقليم قنا", capital: "قنا", detail: "مركز إنتاج الفخار والسكر. نقطة وصل بين وادي النيل وموانئ البحر الأحمر.", period: "العصر الإسلامي/العثماني", label: "قنا" },
        modern: { name: "محافظة قنا", capital: "قنا", detail: "تضم معبد دندرة ومدينة قوص التاريخية. مركز لصناعة السكر والألومنيوم.", period: "مصر الحديثة", stats: "السكان: ~٣.٣ مليون", label: "قنا" }
    },
    fayyum: {
        ancient: { name: "شدت (الفيوم)", capital: "شدت", detail: "واحة خصبة حول بحيرة قارون. عرفت بمشروعات الري في عهد أمنمحات الثالث.", period: "مصر القديمة", label: "شدت" },
        transitional: { name: "إقليم الفيوم", capital: "الفيوم", detail: "ظلت منطقة زراعية غنية. اشتهرت بلوحات الفيوم الجنائزية من العصر الروماني.", period: "العصر الإسلامي/العثماني", label: "الفيوم" },
        modern: { name: "محافظة الفيوم", capital: "الفيوم", detail: "واحدة من أقدم المدن في العالم. تضم محمية وادي الريان وبحيرة قارون.", period: "مصر الحديثة", stats: "السكان: ~٣.٩ مليون", label: "الفيوم" }
    },
    sharqia: {
        ancient: { name: "إقليم الشرق", capital: "بوباسطيس", detail: "موطن عبادة الإلهة باستت. تضم مدينة بوباسطيس (تل بسطة) والعديد من المواقع الأثرية.", period: "مصر القديمة", label: "إقليم الشرق" },
        transitional: { name: "إقليم الشرقية", capital: "الزقازيق", detail: "منطقة زراعية خصبة في شرق الدلتا. مسقط رأس أحمد عرابي قائد الثورة العرابية.", period: "العصر الإسلامي/العثماني", label: "الشرقية" },
        modern: { name: "محافظة الشرقية", capital: "الزقازيق", detail: "من أكبر المحافظات الزراعية. تضم آثار تل بسطة ومنطقة صان الحجر.", period: "مصر الحديثة", stats: "السكان: ~٧.٤ مليون", label: "الشرقية" }
    },
    beheira: {
        ancient: { name: "إقليم الغرب", capital: "دمنهور", detail: "أراضٍ زراعية خصبة في غرب الدلتا. ارتبطت بعبادة الإله حورس.", period: "مصر القديمة", label: "إقليم الغرب" },
        transitional: { name: "إقليم البحيرة", capital: "دمنهور", detail: "إقليم زراعي كبير. شهد معركة رشيد عام ١٨٠٧ ضد الإنجليز.", period: "العصر الإسلامي/العثماني", label: "البحيرة" },
        modern: { name: "محافظة البحيرة", capital: "دمنهور", detail: "من أكبر المحافظات الزراعية. تشتهر بالقطن والقمح والحمضيات وأديرة وادي النطرون.", period: "مصر الحديثة", stats: "السكان: ~٦.٥ مليون", label: "البحيرة" }
    },
    "north-sinai": {
        ancient: { name: "طريق حورس", capital: "ثارو", detail: "الطريق العسكري القديم بين مصر وبلاد الشام. خط الدفاع الأول عن مصر الفرعونية.", period: "مصر القديمة", label: "طريق حورس" },
        transitional: { name: "سيناء الشمالية", capital: "العريش", detail: "معبر جيوش الفتح الإسلامي. محطة رئيسية لقوافل الحج عبر التاريخ.", period: "العصر الإسلامي/العثماني", label: "شمال سيناء" },
        modern: { name: "محافظة شمال سيناء", capital: "العريش", detail: "محافظة حدودية استراتيجية. تضم ممر متلا وبقايا الخط العسكري القديم.", period: "مصر الحديثة", stats: "السكان: ~٠.٥ مليون", label: "شمال سيناء" }
    },
    "red-sea": {
        ancient: { name: "الساحل الشرقي", capital: "ميناء القصير", detail: "ساحل استُخدم للتجارة مع بلاد بونت. تضم محاجر الجرانيت والأحجار الكريمة.", period: "مصر القديمة", label: "الساحل الشرقي" },
        transitional: { name: "ساحل البحر الأحمر", capital: "الغردقة", detail: "طريق تجاري بحري هام. ربط مصر بالحجاز واليمن وشرق أفريقيا.", period: "العصر الإسلامي/العثماني", label: "البحر الأحمر" },
        modern: { name: "محافظة البحر الأحمر", capital: "الغردقة", detail: "وجهة سياحية عالمية للغوص والشواطئ. تمتد على ١٠٨٠ كم من الساحل.", period: "مصر الحديثة", stats: "السكان: ~٠.٤ مليون", label: "البحر الأحمر" }
    },
    matrouh: {
        ancient: { name: "ليبيا الشرقية", capital: "واحة آمون", detail: "أرض القبائل الليبية القديمة. تضم واحة سيوة حيث معبد أوراكل آمون.", period: "مصر القديمة", label: "الحدود الغربية" },
        transitional: { name: "إقليم مرسى مطروح", capital: "مرسى مطروح", detail: "منطقة ساحلية وصحراوية. شهدت معركة العلمين الشهيرة عام ١٩٤٢.", period: "العصر الحديث المبكر", label: "مطروح" },
        modern: { name: "محافظة مطروح", capital: "مرسى مطروح", detail: "من أكبر المحافظات مساحة. مركز سياحة صيفية على المتوسط وسياحة بيئية في واحة سيوة.", period: "مصر الحديثة", stats: "السكان: ~٠.٥ مليون", label: "مطروح" }
    },
    "new-valley": {
        ancient: { name: "الواحات الغربية", capital: "هيبس (الخارجة)", detail: "سلسلة واحات صحراوية. استُخدمت كمنفى ومحطة قوافل عبر الصحراء.", period: "مصر القديمة", label: "الواحات" },
        transitional: { name: "الواحات", capital: "الخارجة", detail: "محطات على درب الأربعين التجاري. ربطت مصر بالسودان وغرب أفريقيا.", period: "العصر الإسلامي/العثماني", label: "الواحات" },
        modern: { name: "محافظة الوادي الجديد", capital: "الخارجة", detail: "أكبر محافظات مصر مساحةً (٤٤٪ من مساحة مصر). غنية بالمياه الجوفية ومشاريع استصلاح الأراضي.", period: "مصر الحديثة", stats: "السكان: ~٠.٣ مليون", label: "الوادي الجديد" }
    },
    benisuef: {
        ancient: { name: "حنت-نسوت", capital: "حنت-نسوت", detail: "إقليم على الضفة الغربية للنيل. عُرف بزراعة الكتان وصناعة البردي.", period: "مصر القديمة", label: "حنت-نسوت" },
        transitional: { name: "إقليم بني سويف", capital: "بني سويف", detail: "مركز زراعي في مصر الوسطى. شهد تطوراً إدارياً في عهد محمد علي.", period: "العصر الإسلامي/العثماني", label: "بني سويف" },
        modern: { name: "محافظة بني سويف", capital: "بني سويف", detail: "بوابة الصعيد. تضم جامعة بني سويف ومناطق صناعية حديثة.", period: "مصر الحديثة", stats: "السكان: ~٣.٤ مليون", label: "بني سويف" }
    },
    qalyubia: {
        ancient: { name: "قمبيت", capital: "أثريبيس", detail: "إقليم في قمة الدلتا. مركز عبادة الإله حورس خنتي-خيتي.", period: "مصر القديمة", label: "قمبيت" },
        transitional: { name: "إقليم القليوبية", capital: "بنها", detail: "منطقة زراعية خصبة شمال القاهرة. ازدهرت في العصر العثماني.", period: "العصر الإسلامي/العثماني", label: "القليوبية" },
        modern: { name: "محافظة القليوبية", capital: "بنها", detail: "تضم مدينة شبرا الخيمة الصناعية والقناطر الخيرية على النيل.", period: "مصر الحديثة", stats: "السكان: ~٥.٩ مليون", label: "القليوبية" }
    },
    menofia: {
        ancient: { name: "نررت-بحدت", capital: "سمنود", detail: "إقليم زراعي خصب في وسط الدلتا. مركز ديني مرتبط بالإلهة إيزيس.", period: "مصر القديمة", label: "نررت-بحدت" },
        transitional: { name: "إقليم المنوفية", capital: "شبين الكوم", detail: "منطقة زراعية في قلب الدلتا. مسقط رأس الرئيس أنور السادات.", period: "العصر الإسلامي/العثماني", label: "المنوفية" },
        modern: { name: "محافظة المنوفية", capital: "شبين الكوم", detail: "محافظة زراعية كثيفة السكان. تشتهر بزراعة القطن والأرز.", period: "مصر الحديثة", stats: "السكان: ~٤.٣ مليون", label: "المنوفية" }
    },
    gharbiah: {
        ancient: { name: "ثا-نتر", capital: "بحبيط الحجارة", detail: "مركز عبادة الإلهة نيت في سايس. عاصمة مصر في الأسرة السادسة والعشرين.", period: "مصر القديمة", label: "ثا-نتر" },
        transitional: { name: "إقليم الغربية", capital: "طنطا", detail: "تضم مدينة طنطا ومقام السيد البدوي. مركز تجاري وثقافي في الدلتا.", period: "العصر الإسلامي/العثماني", label: "الغربية" },
        modern: { name: "محافظة الغربية", capital: "طنطا", detail: "تضم جامعة طنطا ومولد السيد البدوي الشهير. مركز تجاري وصناعي.", period: "مصر الحديثة", stats: "السكان: ~٥.٢ مليون", label: "الغربية" }
    },
    minya: {
        ancient: { name: "مناة خوفو", capital: "مناة خوفو", detail: "إقليم على النيل في مصر الوسطى. يضم مقابر بني حسن ذات الرسومات الفريدة.", period: "مصر القديمة", label: "مناة خوفو" },
        transitional: { name: "إقليم المنيا", capital: "المنيا", detail: "مركز تعليمي في صعيد مصر. تُلقب بعروس الصعيد.", period: "العصر الإسلامي/العثماني", label: "المنيا" },
        modern: { name: "محافظة المنيا", capital: "المنيا", detail: "تضم منطقة تل العمارنة الأثرية ومقابر بني حسن. مركز زراعي وصناعي.", period: "مصر الحديثة", stats: "السكان: ~٦ مليون", label: "المنيا" }
    },
    sohag: {
        ancient: { name: "تا-ور", capital: "ثني (أبيدوس)", detail: "مركز عبادة أوزوريس في أبيدوس. موطن أقدم الملوك المصريين.", period: "مصر القديمة", label: "تا-ور" },
        transitional: { name: "إقليم سوهاج", capital: "سوهاج", detail: "تضم الدير الأبيض والدير الأحمر. مركز ديني مسيحي تاريخي.", period: "العصر الإسلامي/العثماني", label: "سوهاج" },
        modern: { name: "محافظة سوهاج", capital: "سوهاج", detail: "تضم معبد أبيدوس الشهير ومناطق أثرية هامة. مركز زراعي في الصعيد.", period: "مصر الحديثة", stats: "السكان: ~٥.٤ مليون", label: "سوهاج" }
    },
    "kafr-el-sheikh": {
        ancient: { name: "بوتو", capital: "بوتو (تل الفراعين)", detail: "عاصمة مصر السفلى قبل التوحيد. مقر التاج الأحمر ومركز عبادة الإلهة واجيت.", period: "مصر القديمة", label: "بوتو" },
        transitional: { name: "إقليم كفر الشيخ", capital: "كفر الشيخ", detail: "سُميت نسبة إلى الشيخ طلحة بن عوف. منطقة زراعية في شمال الدلتا.", period: "العصر الإسلامي/العثماني", label: "كفر الشيخ" },
        modern: { name: "محافظة كفر الشيخ", capital: "كفر الشيخ", detail: "تضم بحيرة البرلس ومصايد أسماك هامة. منطقة زراعية غنية بالأرز.", period: "مصر الحديثة", stats: "السكان: ~٣.٥ مليون", label: "كفر الشيخ" }
    },
    dakahlia: {
        ancient: { name: "إقليم الدلتا", capital: "تمنيس", detail: "أرض خصبة في قلب دلتا النيل. مركز زراعة البردي وصناعة الورق.", period: "مصر القديمة", label: "الدلتا" },
        transitional: { name: "إقليم الدقهلية", capital: "المنصورة", detail: "شهدت معركة المنصورة عام ١٢٥٠م حيث أُسر لويس التاسع ملك فرنسا.", period: "العصر الإسلامي/العثماني", label: "الدقهلية" },
        modern: { name: "محافظة الدقهلية", capital: "المنصورة", detail: "تضم جامعة المنصورة الشهيرة ومركز الكلى الدولي. محافظة زراعية وصناعية.", period: "مصر الحديثة", stats: "السكان: ~٦.٩ مليون", label: "الدقهلية" }
    },
    "port-said": {
        ancient: { name: "ساحل الدلتا", capital: "بيلوزيوم", detail: "موقع مدينة بيلوزيوم القديمة. نقطة دفاعية على الحدود الشرقية لمصر.", period: "مصر القديمة", label: "بيلوزيوم" },
        transitional: { name: "بور سعيد", capital: "بور سعيد", detail: "أُنشئت عام ١٨٥٩ مع بداية حفر قناة السويس. سُميت تيمناً بالخديوي سعيد.", period: "العصر الحديث المبكر", label: "بور سعيد" },
        modern: { name: "محافظة بور سعيد", capital: "بور سعيد", detail: "مدينة باسلة على مدخل قناة السويس. منطقة حرة تجارية ورمز للمقاومة المصرية.", period: "مصر الحديثة", stats: "السكان: ~٠.٨ مليون", label: "بور سعيد" }
    },
    suez: {
        ancient: { name: "كليسما", capital: "كليسما", detail: "موقع ميناء قديم على البحر الأحمر. نقطة انطلاق للتجارة البحرية.", period: "مصر القديمة", label: "كليسما" },
        transitional: { name: "السويس", capital: "السويس", detail: "ميناء تجاري هام على البحر الأحمر. شهدت مقاومة باسلة في حرب ١٩٧٣.", period: "العصر الإسلامي/العثماني", label: "السويس" },
        modern: { name: "محافظة السويس", capital: "السويس", detail: "تقع على المدخل الجنوبي لقناة السويس. مركز صناعي وبترولي هام.", period: "مصر الحديثة", stats: "السكان: ~٠.٧ مليون", label: "السويس" }
    },
    damietta: {
        ancient: { name: "تامايات", capital: "تامايات", detail: "ميناء على الفرع الشرقي للنيل. مركز تجاري مصري قديم.", period: "مصر القديمة", label: "تامايات" },
        transitional: { name: "دمياط", capital: "دمياط", detail: "صدّت حملتين صليبيتين (١٢١٨ و١٢٤٩). اشتهرت بصناعة الحلويات والأثاث.", period: "العصر الإسلامي/العثماني", label: "دمياط" },
        modern: { name: "محافظة دمياط", capital: "دمياط", detail: "عاصمة صناعة الأثاث في مصر. تضم ميناء دمياط الجديد ورأس البر.", period: "مصر الحديثة", stats: "السكان: ~١.٥ مليون", label: "دمياط" }
    },
    "south-sinai": {
        ancient: { name: "أرض الفيروز", capital: "سرابيط الخادم", detail: "مناجم الفيروز والنحاس الفرعونية. تضم أقدم أبجدية في العالم.", period: "مصر القديمة", label: "أرض الفيروز" },
        transitional: { name: "جنوب سيناء", capital: "الطور", detail: "موطن دير سانت كاترين المبني في القرن السادس. محطة لقوافل الحج.", period: "العصر الإسلامي/العثماني", label: "جنوب سيناء" },
        modern: { name: "محافظة جنوب سيناء", capital: "الطور", detail: "وجهة سياحية عالمية تضم شرم الشيخ ودهب ومحمية رأس محمد وجبل سيناء ومنطقة سانت كاترين.", period: "مصر الحديثة", stats: "السكان: ~٠.١ مليون", label: "جنوب سيناء" }
    },
    disputed: {
        ancient: { name: "منطقة بئر طويل", capital: "غير مأهولة", detail: "منطقة صحراوية نائية بين مصر القديمة والنوبة. استُخدمت كممر عبور للبعثات التجارية جنوباً.", period: "مصر القديمة", label: "بئر طويل" },
        transitional: { name: "إقليم بئر طويل", capital: "غير مأهولة", detail: "منطقة صحراوية بين مصر والسودان. عبرتها القبائل البدوية والقوافل التجارية.", period: "العصر الإسلامي/العثماني", label: "بئر طويل" },
        modern: { name: "بئر طويل", capital: "غير مأهولة", detail: "مساحة ٢,٠٦٠ كم² بين مصر والسودان، لا تدعيها أي دولة بسبب اتفاقيتي ١٨٩٩ و١٩٠٢ المتناقضتين.", period: "منطقة متنازع عليها", stats: "المساحة: ~٢,٠٦٠ كم²", label: "بئر طويل" }
    },
    halaib: {
        ancient: { name: "الساحل الجنوبي", capital: "برنيكي", detail: "جزء من ساحل البحر الأحمر في العصر البطلمي. ربط ميناء برنيكي مصر بتجارة المحيط الهندي.", period: "العصر البطلمي/الروماني", label: "ساحل حلايب" },
        transitional: { name: "أراضي العبابدة", capital: "حلايب", detail: "سكنتها قبائل العبابدة والبشارية. منطقة عازلة بين مصر والسودان.", period: "العصر الإسلامي/العثماني", label: "حلايب" },
        modern: { name: "مثلث حلايب", capital: "حلايب", detail: "مساحة ٢٠,٥٨٠ كم² على البحر الأحمر تديرها مصر وتطالب بها السودان. غنية بالمعادن والشعاب المرجانية.", period: "منطقة متنازع عليها", stats: "المساحة: ~٢٠,٥٨٠ كم²", label: "مثلث حلايب" }
    }
};

// State
let currentMode = 'ancient';
let selectedRegionId = null;
let originalPanelHTML = null; // Store for restoration after comparison

// DOM
// DOM references (will be re-verified in init)
let body = document.getElementById('body');
let slider = document.getElementById('hero-era-slider');
let modeSummary = document.getElementById('mode-summary');
let eraBtns = document.querySelectorAll('.era-btn');
let panelPlaceholder = document.getElementById('panel-placeholder');
let panelContent = document.getElementById('panel-content');
let regionPaths = document.querySelectorAll('.region');
let tooltip = document.getElementById('tooltip');
let heroBubble = document.querySelector('.here-bubble');
let hudBreadcrumbs = document.getElementById('hud-breadcrumbs');
let hudRegionCounter = document.getElementById('hud-region-count');

// Bubble State
const defaultBg = 'var(--c-purple)';
const defaultColor = '#fff';

function setBubble(text, bg, color) {
    if (!heroBubble) return;
    heroBubble.innerHTML = text;
    heroBubble.style.background = bg || defaultBg;
    heroBubble.style.color = color || (document.documentElement.classList.contains('light-mode') && !bg ? '#000' : (color || defaultColor));
}

function resetBubble() {
    const defaultText = translations[currentLang]?.here_bubble || 'Explore Here!';
    setBubble(defaultText, defaultBg, defaultColor);
}

let hasInitialized = false;

function init() {
    if (hasInitialized) return;
    hasInitialized = true;
    // Re-verify key elements as DOM might have shifted
    body = document.getElementById('body');
    panelContent = document.getElementById('panel-content');
    modeSummary = document.getElementById('mode-summary');

    if (!originalPanelHTML && panelContent) {
        originalPanelHTML = panelContent.innerHTML;
    }

    if (typeof window.updateMode === 'function') {
        window.updateMode(0);
    } else {
        updateMode(0); // Fallback
    }
    setupEventListeners();
    setupHUDSearch();
    updateTabletTime();
    window.setLanguage(currentLang);
    setupAgentBridge(); // Integrated Agent Bridge
    setInterval(updateTabletTime, 30000);

    const preloader = document.getElementById('preloader');
    const welcomeScreen = document.getElementById('welcome-screen');

    // 1. Check if welcome seen (V2 key)
    if (localStorage.getItem('galaWelcomeSeen') === 'true') {
        if (welcomeScreen) welcomeScreen.classList.add('hidden');

        // 2. Already seen: brief entry loader for transition feel
        if (preloader) {
            preloader.classList.add('active');
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 5000);
        }
    } else {
        // Welcome New Explorer
        if (welcomeScreen) {
            welcomeScreen.classList.remove('hidden');
            // GSAP Entrance
            if (typeof gsap !== 'undefined') {
                gsap.from('.welcome-main-title', { opacity: 0, y: 30, duration: 1.2, ease: 'power4.out', delay: 0.5 });
                gsap.from('.welcome-badge', { opacity: 0, x: -20, duration: 1, ease: 'power3.out', delay: 0.3 });
                gsap.from('.welcome-panel-right', { opacity: 0, x: 50, duration: 1.5, ease: 'power4.out', delay: 0.8 });
                gsap.from('.feature-card', { opacity: 0, y: 20, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 1.2 });
            }
        }
        if (preloader) preloader.classList.remove('active');
    }
}

window.startLegacyJourney = function () {
    const preloader = document.getElementById('preloader');
    const welcomeScreen = document.getElementById('welcome-screen');
    const galaBot = document.getElementById('gala-bot');

    // 1. Hide welcome with animation
    if (welcomeScreen) {
        if (typeof gsap !== 'undefined') {
            gsap.to('.welcome-content-split', {
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: 'power4.in',
                onComplete: () => {
                    welcomeScreen.classList.add('hidden');
                    proceedToLoader();
                }
            });
        } else {
            welcomeScreen.classList.add('hidden');
            proceedToLoader();
        }
    }

    function proceedToLoader() {
        if (galaBot) galaBot.classList.add('hidden');

        // Save state (V2)
        localStorage.setItem('galaWelcomeSeen', 'true');

        // 2. Trigger the "Hyperspeed" Loader
        if (preloader) {
            preloader.classList.add('active');
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.style.overflow = '';
            }, 5000);
        }
    }
};

window.startJourney = window.startLegacyJourney; // Fallback for any old refs

// ===== MODES (ARABIC) =====
const modesTrans = {
    ar: [
        {
            id: 'ancient',
            title: 'من <em>الأقاليم</em> إلى المحافظات',
            summary: "نظام الأقاليم التاريخي (٤٢ إقليماً) — جوهر التنظيم الإداري لمصر الفرعونية بكل ما تحمله من موروث ديني وجغرافي.",
            intro: "لأكثر من ثلاثة آلاف عام، قُسمت مصر إلى ٤٢ إقليماً (سبات)، يحكم كل منها حاكم إقليمي. استمرت حدودها من الأسرة الأولى حتى سقوط روما.",
            bgClass: 'mode-ancient',
            regionCount: '٤٢',
            yearRange: '٥٠٠٠ ق.م — ٣٠ ق.م'
        },
        {
            id: 'transitional',
            title: '<em>الفتح</em> والإصلاح',
            summary: "التطور الإداري الوسيط (الولايات والمديريات) — مرحلة الاندماج والتحول الناتجة عن تعاقب الدول والحضارات وقرون من إعادة الهيكلة.",
            intro: "أنهى الفتح العربي عام ٦٤١م نظام الأقاليم القديم. عبر حكم المماليك والعثمانيين، أُعيدت هيكلة إدارة مصر إلى ولايات.",
            bgClass: 'mode-transitional',
            regionCount: '١٤',
            yearRange: '٦٤١ م — ١٨٠٥ م'
        },
        {
            id: 'modern',
            title: 'المحافظات الـ <em>٢٧</em>',
            summary: "المنظومة الإدارية الحديثة (٢٧ محافظة) — الهيكل الجغرافي المعاصر للجمهورية الذي يجمع بين أصالة التاريخ ومتطلبات التمدن الرقمي.",
            intro: "تعكس المحافظات الـ ٢٧ اليوم الجغرافيا الفرعونية وواقع القرن الحادي والعشرين. بعضها كالأقصر يردد صدى أسلافه القدماء، وبعضها كبورسعيد من نتاج العصر الحديث.",
            bgClass: 'mode-modern',
            regionCount: '٢٧',
            yearRange: '١٩٥٣ م — الآن'
        }
    ],
    en: [
        {
            id: 'ancient',
            title: 'From <em>Nomes</em> to Governorates',
            summary: "Historical Nome System (42 Nomes) — The essence of Pharaonic administrative organization, carrying the full weight of its religious and geographical legacy.",
            intro: "For over 3000 years, Egypt was divided into 42 Nomes (Sepat), each ruled by a Nomarch. Their boundaries lasted from the 1st Dynasty until the fall of Rome.",
            bgClass: 'mode-ancient',
            regionCount: '42',
            yearRange: '5000 BC — 30 BC'
        },
        {
            id: 'transitional',
            title: '<em>Conquest</em> and Reform',
            summary: "Middle Administrative Evolution (Provinces & Directorates) — A transformative era of integration resulting from successive civilizations and centuries of structural reorganization.",
            intro: "The Arab conquest in 641 AD ended the old Nome system. Through Mamluk and Ottoman rule, Egypt's administration was reorganized into Provinces.",
            bgClass: 'mode-transitional',
            regionCount: '14',
            yearRange: '641 AD — 1805 AD'
        },
        {
            id: 'modern',
            title: 'The <em>27</em> Governorates',
            summary: "Modern Administrative Framework (27 Governorates) — The contemporary geographic structure of the Republic, bridging historical authenticity with the requirements of digital urbanization.",
            intro: "Today's 27 Governorates reflect both Pharaonic geography and 21st-century realities. Some echo their ancient ancestors, others were born of modern needs.",
            bgClass: 'mode-modern',
            regionCount: '27',
            yearRange: '1953 AD — Present'
        }
    ],
    de: [
        {
            id: 'ancient',
            title: 'Vom <em>Gau</em> zum Gouvernement',
            summary: "Historisches Gausystem (42 Gaue) — Die Essenz der pharaonischen Verwaltungsorganisation, die das gesamte Gewicht ihres religiösen und geografischen Erbes in sich trägt.",
            intro: "Über 3000 Jahre lang war Ägypten in 42 Gaue (Sepat) unterteilt, die jeweils von einem Nomarchen regiert wurden. Ihre Grenzen hielten von der 1. Dynastie bis zum Fall Roms.",
            bgClass: 'mode-ancient',
            regionCount: '42',
            yearRange: '5000 v. Chr. — 30 v. Chr.'
        },
        {
            id: 'transitional',
            title: '<em>Eroberung</em> und Reform',
            summary: "Mittelalterliche administrative Entwicklung (Provinzen & Direktorate) — Eine transformative Ära der Integration, die aus aufeinanderfolgenden Zivilisationen und Jahrhunderten struktureller Neuorganisation resultiert.",
            intro: "Die arabische Eroberung im Jahr 641 n. Chr. beendete das alte Gausystem. Unter mamlukischer und osmanischer Herrschaft wurde Ägypten neu organisiert.",
            bgClass: 'mode-transitional',
            regionCount: '14',
            yearRange: '641 n. Chr. — 1805 n. Chr.'
        },
        {
            id: 'modern',
            title: 'Die <em>27</em> Gouvernements',
            summary: "Moderner administrativer Rahmen (27 Gouvernements) — Die zeitgenössische geografische Struktur der Republik, die historische Authentizität mit den Anforderungen der digitalen Urbanisierung verbindet.",
            intro: "Die heutigen 27 Gouvernements spiegeln sowohl die pharaonische Geographie als auch die Realitäten des 21. Jahrhunderts wider.",
            bgClass: 'mode-modern',
            regionCount: '27',
            yearRange: '1953 n. Chr. — Heute'
        }
    ]
};

let currentEraIndex = 0;

window.updateMode = function (index) {
    currentEraIndex = index;
    const mode = modesTrans[currentLang][index] || modesTrans['ar'][index];
    currentMode = mode.id;

    const t = translations[currentLang];

    if (body) body.className = mode.bgClass;

    const titleEl = document.getElementById('main-title');
    if (titleEl) titleEl.innerHTML = mode.title;

    if (modeSummary) modeSummary.textContent = mode.summary;

    const introEl = document.getElementById('intro-text');
    if (introEl) introEl.textContent = mode.intro;

    // 1. Sync Layer Panel Radios
    const eraRadios = document.querySelectorAll('input[name="era-layer"]');
    if (eraRadios.length > 0 && eraRadios[index]) {
        eraRadios[index].checked = true;
    }

    // 2. Sync Era Slider & Ticks (Inside Panel)
    const panelSlider = document.getElementById('panel-era-slider');
    if (panelSlider) {
        panelSlider.value = index;
        const pTicks = document.querySelectorAll('.panel-slider-labels .p-tick');
        pTicks.forEach((t, i) => t.classList.toggle('active', i === index));
    }


    // 3. Update HUD Data
    if (hudRegionCounter) {
        hudRegionCounter.textContent = mode.regionCount;
    }
    const hudModeLabel = document.getElementById('hud-mode-label');
    if (hudModeLabel) {
        const modeKeys = ['ancient_protocol', 'transitional_protocol', 'modern_protocol'];
        hudModeLabel.textContent = t[modeKeys[index]];
    }

    // 4. Update Layer Description in Panel
    const layerDesc = document.getElementById('layer-desc');
    if (layerDesc) {
        layerDesc.textContent = `${currentLang === 'ar' ? 'يتم عرض' : 'Displaying'}: ${mode.summary}`;
    }

    // 5. Cinematic transition effect to map
    const map = document.getElementById('egypt-map');
    if (map && typeof gsap !== 'undefined') {
        gsap.to(map, {
            opacity: 0.5, scale: 0.98, duration: 0.3, ease: 'power2.in', onComplete: () => {
                gsap.to(map, {
                    opacity: 1, scale: 1,
                    duration: 0.6, ease: 'back.out(1.2)'
                });
            }
        });
    }

    const allEraButtons = document.querySelectorAll('.era-btn');
    allEraButtons.forEach((btn, i) => btn.classList.toggle('active', i == index));

    if (comparisonMode && comparisonRegions.length === 2) {
        showComparisonResults();
    } else if (selectedRegionId) {
        showRegionDetails(selectedRegionId);
    } else {
        resetHUDHighlight();
    }

    updateHUDSearchPlaceholder();
    if (selectedRegionId || (comparisonMode && comparisonRegions.length > 0)) morphSymbols(currentMode);
}

function resetHUDHighlight() {
    const highlightBar = document.getElementById('hud-highlight-bar');
    if (highlightBar) {
        const label = highlightBar.querySelector('.highlight-label');
        const val = highlightBar.querySelector('.highlight-val');
        if (label) label.textContent = 'النظام نشط';
        if (val) val.textContent = '—';
    }
    const hudActiveName = document.getElementById('hud-active-name');
    if (hudActiveName) hudActiveName.textContent = '—';
}

const eraIcons = {
    ancient: {
        capital: `<path d="M3 21h18M3 7v1h18V7M5 8v10M9 8v10M15 8v10M19 8v10M2 4h20M2 1h20"/>`, // Temple
        population: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`, // Users
        area: `<path d="M12 2v20M2 12h20M12 2l4 4M12 2l-4 4M12 22l4-4M12 22l-4-4"/>`, // Compass
        heritage: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>` // Artifact
    },
    transitional: {
        capital: `<path d="M12 2l-7 3v14h14V5l-7-3zM12 6v6m0 0l-2-2m2 2l2-2"/>`, // Fortress
        population: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>`,
        area: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>`,
        heritage: `<path d="M12 3v19M5 8h14M5 16h14"/>`
    },
    modern: {
        capital: `<path d="M3 21h18M9 21V9l3-4 3 4v12M9 13h6M9 17h6"/>`, // Building
        population: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
        area: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`, // Screen/Map
        heritage: `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>` // Star
    }
};

function morphSymbols(mode) {
    const icon1 = document.querySelector('#fact-icon-1 svg');
    const icon2 = document.querySelector('#fact-icon-2 svg');

    if (icon1 && eraIcons[mode]) {
        gsap.to(icon1, {
            opacity: 0, scale: 0.5, duration: 0.2, onComplete: () => {
                icon1.innerHTML = eraIcons[mode].capital;
                gsap.to(icon1, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
            }
        });
    }
    if (icon2 && eraIcons[mode]) {
        gsap.to(icon2, {
            opacity: 0, scale: 0.5, duration: 0.2, delay: 0.1, onComplete: () => {
                icon2.innerHTML = eraIcons[mode].population;
                gsap.to(icon2, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" });
            }
        });
    }
}

function setupHUDSearch() {
    const input = document.getElementById('hud-search-input');
    const results = document.getElementById('search-results');

    if (!input || !results) return;

    input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 1) {
            results.classList.add('hidden');
            return;
        }

        const matches = [];
        const eras = ['ancient', 'transitional', 'modern'];

        Object.entries(regionsData).forEach(([id, data]) => {
            eras.forEach(era => {
                const current = data[era];
                if (current && (
                    current.name.toLowerCase().includes(query) ||
                    current.capital.toLowerCase().includes(query) ||
                    (current.label && current.label.toLowerCase().includes(query)) ||
                    (current.period && current.period.toLowerCase().includes(query))
                )) {
                    matches.push({ id, era, current });
                }
            });
        });

        // Limit to top 5 matches
        const uniqueMatches = matches.slice(0, 5);

        if (uniqueMatches.length > 0) {
            results.innerHTML = uniqueMatches.map(({ id, era, current }) => {
                const icon = era === 'ancient' ? '𓉐' : (era === 'modern' ? '📍' : '🕌');
                return `<div class="search-result-item" data-id="${id}" data-era="${era}">
                    <span class="res-icon">${icon}</span>
                    <span class="res-name">${current.name}</span>
                    <span class="res-era">${current.period}</span>
                </div>`;
            }).join('');
            results.classList.remove('hidden');

            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.dataset.id;
                    const era = item.dataset.era;

                    selectedRegionId = id;

                    const eraIndex = eras.indexOf(era);
                    if (currentMode !== era && eraIndex !== -1) {
                        if (slider) slider.value = eraIndex;
                        if (typeof window.updateMode === 'function') {
                            window.updateMode(eraIndex);
                        } else {
                            updateMode(eraIndex);
                        }
                    } else {
                        if (typeof window.showRegionDetails === 'function') {
                            window.showRegionDetails(id);
                        } else {
                            showRegionDetails(id);
                        }
                    }

                    input.value = '';
                    results.classList.add('hidden');

                    // Enhancement: Highlight found region
                    const path = document.getElementById(id);
                    if (path) {
                        path.classList.add('search-pulse');
                        setTimeout(() => path.classList.remove('search-pulse'), 2500);
                    }

                    // Scroll to map
                    const mapEl = document.getElementById('hero-map');
                    if (mapEl) window.lenis ? window.lenis.scrollTo(mapEl, { offset: -100 }) : mapEl.scrollIntoView({ behavior: 'smooth' });
                });
            });
        } else {
            results.classList.add('hidden');
        }
    });

    // Close results on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.add('hidden');
        }
    });
}

function updateHUDSearchPlaceholder() {
    const input = document.getElementById('hud-search-input');
    if (!input) return;
    const t = translations[currentLang];
    const placeholders = {
        ancient: t.search_ancient,
        transitional: t.search_trans,
        modern: t.search_modern
    };
    input.placeholder = placeholders[currentMode] || t.search_placeholder;
}

window.showRegionDetails = function (id) {
    console.log("Showing details for region:", id);
    // Comparison Mode Guard
    if (comparisonMode) {
        handleComparisonSelection(id);
        return;
    }

    const t = translations[currentLang];
    const data = regionsData[id];
    const panelBody = document.querySelector('.panel-body');
    if (panelBody) panelBody.scrollTop = 0;

    if (!data) {
        panelContent?.classList.add('hidden');
        panelPlaceholder?.classList.remove('hidden');
        const emptyTitle = panelPlaceholder?.querySelector('.empty-title');
        const emptySub = panelPlaceholder?.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = t.empty_title;
        if (emptySub) emptySub.textContent = t.empty_sub;
        return;
    }

    // Language Fallback logic for regions
    let modeData = data[currentMode];
    if (data[currentLang] && data[currentLang][currentMode]) {
        modeData = data[currentLang][currentMode];
    }

    panelPlaceholder?.classList.add('hidden');
    panelContent?.classList.remove('hidden');

    // Translation logic for labels in panel
    const labels = {
        'label-capital': t.detail_capital,
        'label-ruler': t.detail_ruler,
        'label-period': t.detail_period,
        'label-area': t.detail_area,
        'label-impact': t.detail_impact,
        'label-monuments': t.detail_monuments,
        'tab-overview': t.detail_overview
    };

    Object.keys(labels).forEach(classKey => {
        const el = document.querySelector(`.${classKey}`);
        if (el) el.textContent = labels[classKey];
    });

    const cleanName = modeData.name.replace(/\(.*\)/, '').trim();
    (() => { const el = document.getElementById('region-name'); if (el) el.textContent = cleanName; })();;
    const hudActiveName = document.getElementById('hud-active-name');
    if (hudActiveName) hudActiveName.textContent = cleanName;

    // Era names mapping
    const eraNames = {
        ancient: t.era_ancient,
        transitional: t.era_transitional,
        modern: t.era_modern
    };
    (() => { const el = document.getElementById('region-period'); if (el) el.textContent = modeData.period || eraNames[currentMode]; })();;

    // Symbol display (Ancient only)
    const symbolEl = document.getElementById('region-symbol');
    if (symbolEl) {
        if (currentMode === 'ancient' && modeData.symbol) {
            symbolEl.textContent = modeData.symbol.split('(')[0].trim();
            symbolEl.classList.remove('hidden');
        } else {
            symbolEl.classList.add('hidden');
        }
    }

    // Reset panel to first tab when opening new region
    document.querySelectorAll('.tab-btn').forEach((b, i) => {
        b.classList.toggle('active', i === 0);
        if (i === 0) b.innerText = t.detail_overview;
    });
    document.querySelectorAll('.tab-pane').forEach((p) => p.classList.toggle('active', p.id === 'pane-overview'));

    // Wiki link update
    const wikiLink = document.getElementById('wiki-link');
    if (wikiLink) {
        const prefix = t.wiki_prefix;
        const searchTerm = cleanName.replace(/إقليم|محافظة|ثغر|Governorate|Nome|Provinz/, '').trim();
        wikiLink.href = `${prefix}${encodeURIComponent(searchTerm)}`;
    }

    (() => { const el = document.getElementById('region-capital'); if (el) el.textContent = modeData.capital; })();;
    (() => { const el = document.getElementById('region-ruler'); if (el) el.textContent = modeData.ruler || (currentMode === 'ancient' ? t.ruler_ancient : t.ruler_modern); })();;
    (() => { const el = document.getElementById('region-status-val'); if (el) el.textContent = modeData.status_label || (currentMode === 'ancient' ? t.status_ancient : t.status_modern); })();;
    (() => { const el = document.getElementById('region-detail'); if (el) el.textContent = modeData.detail; })();;

    // Stats population elements (already established in lower logic, so we will just ensure they exist)
    const infoArea = document.getElementById('info-area');
    const infoMonuments = document.getElementById('info-monuments');
    const infoFounded = document.getElementById('info-founded');

    // New: Populate Timeline based on region and mode
    const timelineEvents = document.getElementById('timeline-events');
    if (timelineEvents) {
        timelineEvents.innerHTML = '';
        const events = getRegionTimeline(id, currentMode);
        if (events && events.length > 0) {
            events.forEach(ev => {
                const evEl = document.createElement('div');
                evEl.className = 'timeline-event';
                evEl.innerHTML = `
                    <div class="event-dot-col"><div class="event-dot"></div><div class="event-line"></div></div>
                    <div class="event-content">
                        <div class="event-year">${ev.year}</div>
                        <div class="event-text">${ev.text}</div>
                    </div>
                `;
                timelineEvents.appendChild(evEl);
            });
        }
    }

    morphSymbols(currentMode);

    // Check for scrollable content to show/hide scroll hint
    const scrollHint = document.querySelector('.scroll-hint');
    if (panelBody && scrollHint) {
        setTimeout(() => {
            if (panelBody.scrollHeight > panelBody.clientHeight) {
                scrollHint.classList.remove('hidden');
            } else {
                scrollHint.classList.add('hidden');
            }
        }, 100);
    }

    // Era badge
    const eraBadge = document.getElementById('era-badge');
    const regionType = document.getElementById('region-type');
    if (currentMode === 'ancient') {
        eraBadge.textContent = t.era_ancient_badge;
        regionType.textContent = t.type_ancient;
    } else if (currentMode === 'transitional') {
        eraBadge.textContent = t.era_trans_badge;
        regionType.textContent = t.type_trans;
    } else {
        eraBadge.textContent = t.era_modern_badge;
        regionType.textContent = t.type_modern;
    }

    // Era progress dots
    document.querySelectorAll('.era-step-dot').forEach(dot => dot.classList.remove('active'));
    const eraSteps = document.querySelectorAll('.era-step');
    eraSteps.forEach(step => {
        if (step.dataset.era === currentMode) {
            step.querySelector('.era-step-dot').classList.add('active');
        }
    });

    // HUD breadcrumbs update
    if (hudBreadcrumbs) {
        const items = hudBreadcrumbs.querySelectorAll('.bc-item');
        items.forEach(item => item.classList.remove('active'));
        if (currentMode === 'ancient') items[0].classList.add('active');
        if (currentMode === 'transitional') items[1].classList.add('active');
        if (currentMode === 'modern') items[2].classList.add('active');
    }

    // New: HUD Highlight Bar Update
    const highlightBar = document.getElementById('hud-highlight-bar');
    if (highlightBar) {
        const label = highlightBar.querySelector('.highlight-label');
        const val = highlightBar.querySelector('.highlight-val');
        const t = translations[currentLang];
        if (label) label.textContent = currentMode === 'ancient' ? t.highlight_ancient : currentMode === 'transitional' ? t.highlight_trans : t.highlight_modern;
        if (val) val.textContent = modeData.name ? modeData.capital : modeData.capital; // Keep as is for now

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(highlightBar, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
        }
    }

    // Dynamic population & status context
    const statsGroup = document.getElementById('modern-stats');
    const regionStats = document.getElementById('region-stats');
    const popBarContainer = document.getElementById('pop-bar-container');
    const popBarFill = document.getElementById('pop-bar-fill');
    const popBarValue = document.getElementById('pop-bar-value');

    if (currentMode === 'modern' && modeData.stats) {
        if (statsGroup) statsGroup.classList.remove('hidden');
        if (regionStats) regionStats.textContent = modeData.stats;
        if (popBarContainer) {
            popBarContainer.classList.remove('hidden');
            const popMatch = modeData.stats.match(/[\d.٠-٩]+/);
            let popNum = 0;
            if (popMatch) {
                popNum = parseFloat(popMatch[0].replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
            }
            const percent = Math.min((popNum / 10) * 100, 100);
            if (popBarValue) popBarValue.textContent = modeData.stats;
            setTimeout(() => { if (popBarFill) popBarFill.style.width = percent + '%'; }, 100);
        }
    } else {
        if (statsGroup) statsGroup.classList.remove('hidden'); // Show generic label
        const t = translations[currentLang];
        const popEstimate = currentMode === 'ancient' ? t.density_ancient : t.density_trans;
        if (regionStats) regionStats.textContent = popEstimate;
        if (popBarContainer) popBarContainer.classList.add('hidden');
    }

    // Infographic stats assignment
    // (Variables infoArea, infoMonuments, infoFounded are already declared above)
    // Generate contextual data based on region and era
    const regionAreas = {
        luxor: '2960', aswan: '679', cairo: '3085', alexandria: '2679', giza: '85153',
        ismailia: '5067', asyut: '1553', qena: '1851', fayyum: '6068', sharqia: '4911',
        beheira: '10130', 'north-sinai': '27574', 'red-sea': '203685', matrouh: '166563',
        'new-valley': '440098', benisuef: '1322', qalyubia: '1001', menofia: '2543',
        gharbiah: '1942', minya: '2262', sohag: '1547', 'kafr-el-sheikh': '3437',
        dakahlia: '3471', 'port-said': '1351', suez: '17840', damietta: '589',
        'south-sinai': '33140', disputed: '2060', halaib: '20580'
    };
    const regionMonuments = {
        luxor: '14', aswan: '8', cairo: '23', alexandria: '9', giza: '11',
        ismailia: '3', asyut: '6', qena: '7', fayyum: '5', sharqia: '6',
        beheira: '4', 'north-sinai': '5', 'red-sea': '4', matrouh: '3',
        'new-valley': '4', benisuef: '3', qalyubia: '4', menofia: '2',
        gharbiah: '5', minya: '7', sohag: '8', 'kafr-el-sheikh': '3',
        dakahlia: '4', 'port-said': '2', suez: '3', damietta: '3',
        'south-sinai': '6', disputed: '0', halaib: '2'
    };
    const regionFounded = {
        luxor: '٣٢٠٠ ق.م', aswan: '٣٠٠٠ ق.م', cairo: '٩٦٩ م', alexandria: '٣٣١ ق.م',
        giza: '٢٥٨٠ ق.م', ismailia: '١٨٦٣', asyut: '٣١٠٠ ق.م', qena: '٣٢٠٠ ق.م',
        fayyum: '٤٠٠٠ ق.م', sharqia: '٢٦٠٠ ق.م', beheira: '٢٦٠٠ ق.م',
        'north-sinai': '٣٠٠٠ ق.م', 'red-sea': '٣٠٠ ق.م', matrouh: '٣٣١ ق.م',
        'new-valley': '٢٥٠٠ ق.م', benisuef: '٣١٠٠ ق.م', qalyubia: '١٨٢٦',
        menofia: '١٨٢٦', gharbiah: '٢٦٠٠ ق.م', minya: '٣٠٠٠ ق.م',
        sohag: '٣١٠٠ ق.م', 'kafr-el-sheikh': '٣٠٠٠ ق.م', dakahlia: '١٢٥٠',
        'port-said': '١٨٥٩', suez: '١٨٦٩', damietta: '٢٠٠٠ ق.م',
        'south-sinai': '٣٠٠٠ ق.م', disputed: '—', halaib: '—'
    };
    // Format area with Arabic thousands separator
    const formatArea = (n) => {
        if (!n || n === '—') return '—';
        const s = String(n).replace(/\D/g, '');
        const t = translations[currentLang];
        const loc = t.locale || 'en-US';
        if (currentLang === 'ar') {
            const ar = '٠١٢٣٤٥٦٧٨٩';
            const formatted = s.replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/\d/g, d => ar[d]);
            return formatted + ' ' + t.area_unit;
        } else {
            const formatted = parseInt(s).toLocaleString(loc);
            return formatted + ' ' + t.area_unit;
        }
    };

    const formatVal = (v) => {
        if (!v || v === '—') return '—';
        const numOnly = String(v).replace(/[^\d٠-٩]/g, '');
        const loc = translations[currentLang]?.locale || 'en-US';
        const suffix = String(v).includes('ق.م') ? ' ' + t.bce : (String(v).includes('م') ? ' ' + t.ce : '');
        const numeric = parseInt(numOnly.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
        const formatted = isNaN(numeric) ? '—' : numeric.toLocaleString(loc);
        return formatted + suffix;
    };

    if (infoArea) infoArea.textContent = regionAreas[id] ? formatArea(regionAreas[id]).replace(' ' + translations[currentLang].area_unit, '') : '—';
    if (infoMonuments) infoMonuments.textContent = formatVal(regionMonuments[id]);
    if (infoFounded) infoFounded.textContent = formatVal(regionFounded[id]);

    // Update coordinate tag
    const getLocalizedCoords = (raw) => {
        if (!raw) return currentLang === 'ar' ? '٣٠°٠٤′ ش — ٣١°١٤′ ق' : '30°04′ N — 31°14′ E';
        const t = translations[currentLang];
        let localized = raw;
        if (currentLang !== 'ar') {
            // Convert Arabic numerals and letters to English
            localized = localized.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
                .replace('ش', t.coord_n)
                .replace('ق', t.coord_e);
        }
        return localized;
    };

    const regionCoords = {
        luxor: '٢٥°٤١′ ش — ٣٢°٣٩′ ق', aswan: '٢٣°٥٨′ ش — ٣٢°٥٣′ ق', cairo: '٣٠°٠٣′ ش — ٣١°١٤′ ق',
        alexandria: '٣١°١٢′ ش — ٢٩°٥٤′ ق', giza: '٣٠°٠١′ ش — ٣١°١٣′ ق', ismailia: '٣٠°٣٥′ ش — ٣٢°١٦′ ق',
        asyut: '٢٧°١١′ ش — ٣١°١٠′ ق', qena: '٢٦°١٠′ ش — ٣٢°٤٣′ ق', fayyum: '٢٩°١٨′ ش — ٣٠°٤٥′ ق',
        sharqia: '٣٠°٤٣′ ش — ٣١°٣٧′ ق', beheira: '٣٠°٣١′ ش — ٣٠°٢٨′ ق',
        'north-sinai': '٣١°٠٨′ ش — ٣٣°٤٨′ ق', 'red-sea': '٢٦°١٩′ ش — ٣٤°٠٠′ ق',
        matrouh: '٣١°٢٠′ ش — ٢٧°١٣′ ق', 'new-valley': '٢٥°٢٦′ ش — ٣٠°٣٢′ ق',
        benisuef: '٢٩°٠٤′ ش — ٣٠°٥٩′ ق', qalyubia: '٣٠°٢٥′ ش — ٣١°١٣′ ق',
        menofia: '٣٠°٢٩′ ش — ٣١°٠٠′ ق', gharbiah: '٣٠°٥٣′ ش — ٣٠°٥٤′ ق',
        minya: '٢٨°٠٦′ ش — ٣٠°٤٣′ ق', sohag: '٢٦°٣٣′ ش — ٣١°٤٢′ ق',
        'kafr-el-sheikh': '٣١°٠٦′ ش — ٣٠°٥٧′ ق', dakahlia: '٣١°٠٢′ ش — ٣١°٢٣′ ق',
        'port-said': '٣١°١٥′ ش — ٣٢°١٨′ ق', suez: '٢٩°٥٨′ ش — ٣٢°٣٢′ ق',
        damietta: '٣١°٢٥′ ش — ٣١°٤٨′ ق', 'south-sinai': '٢٨°٣٠′ ش — ٣٤°٠٢′ ق'
    };
    const coordEl = document.getElementById('coord-tag');
    if (coordEl) {
        const localizedCoord = getLocalizedCoords(regionCoords[id]);
        if (typeof gsap !== 'undefined') {
            gsap.to(coordEl, {
                opacity: 0.3, duration: 0.1, repeat: 3, yoyo: true, onComplete: () => {
                    coordEl.textContent = localizedCoord;
                    gsap.to(coordEl, { opacity: 1, duration: 0.2 });
                }
            });
        } else {
            coordEl.textContent = localizedCoord;
        }
    }

    // Area badge chips
    const areaBadges = document.getElementById('area-badges');
    if (areaBadges) {
        const isNile = ['luxor', 'aswan', 'cairo', 'giza', 'qena', 'sohag', 'minya', 'asyut', 'benisuef', 'dakahlia', 'qalyubia'].includes(id);
        const isDelta = ['beheira', 'gharbiah', 'menofia', 'dakahlia', 'sharqia', 'kafr-el-sheikh', 'damietta', 'qalyubia'].includes(id);
        const isDesert = ['matrouh', 'new-valley', 'red-sea', 'north-sinai', 'south-sinai'].includes(id);
        const isCoastal = ['alexandria', 'port-said', 'damietta', 'matrouh', 'red-sea', 'south-sinai', 'suez', 'ismailia'].includes(id);
        const hasHeritage = parseInt(regionMonuments[id] || '0') >= 5;

        let badges = '';
        if (isNile) badges += `<div class="area-chip geo">${t.geo_nile}</div>`;
        if (isDelta) badges += `<div class="area-chip geo">${t.geo_delta}</div>`;
        if (isDesert) badges += `<div class="area-chip pop">${t.geo_desert}</div>`;
        if (isCoastal) badges += `<div class="area-chip geo">${t.geo_coastal}</div>`;
        if (hasHeritage) badges += `<div class="area-chip rank">${t.geo_heritage}</div>`;
        if (currentMode === 'modern') badges += `<div class="area-chip pop">📊 ${(modeData.stats || '')}</div>`;
        areaBadges.innerHTML = badges;
    }

    // Timeline events based on region
    const timelineMini = document.getElementById('timeline-events');
    if (timelineMini) {
        const events = getRegionTimeline(id, currentMode);
        let html = '';
        events.forEach((ev, i) => {
            html += `<div class="timeline-event">
                <div class="event-dot-col">
                    <div class="event-dot"></div>
                    ${i < events.length - 1 ? '<div class="event-line"></div>' : ''}
                </div>
                <div class="event-content">
                    <div class="event-year">${ev.year}</div>
                    <div class="event-text">${ev.text}</div>
                </div>
            </div>`;
        });
        timelineMini.innerHTML = html;
    }

    regionPaths.forEach(path => path.classList.toggle('selected', path.id === id));

    // Staggered reveal animation for panel elements
    if (typeof gsap !== 'undefined') {
        const itemsToAnimate = [
            '.gov-header',
            '.gov-era-strip',
            '.gov-fact-item',
            '.gov-stat',
            '.gov-tags',
            '.gov-record',
            '.gov-timeline',
            '.gov-footer'
        ];

        gsap.fromTo(itemsToAnimate,
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.4,
                ease: "power2.out",
                clearProps: "all"
            }
        );
    }
}

function getRegionTimeline(id, mode) {
    const timelines = {
        luxor: [
            { year: '٣٢٠٠ ق.م', text: 'تأسيس طيبة كعاصمة في عهد مينا' },
            { year: '١٥٠٠ ق.م', text: 'بناء معابد الكرنك والأقصر' },
            { year: '١٣٣٦ ق.م', text: 'دفن توت عنخ آمون في وادي الملوك' },
            { year: '٢٠٠٩ م', text: 'استقلال الأقصر كمحافظة' }
        ],
        cairo: [
            { year: '٣١٠٠ ق.م', text: 'تأسيس منف كأول عاصمة موحدة' },
            { year: '٩٦٩ م', text: 'بناء القاهرة الفاطمية' },
            { year: '١٢٥٠ م', text: 'ازدهار القاهرة في عهد المماليك' },
            { year: '١٩٥٢ م', text: 'عاصمة الجمهورية' }
        ],
        alexandria: [
            { year: '٣٣١ ق.م', text: 'تأسيسها بواسطة الإسكندر الأكبر' },
            { year: '٢٨٠ ق.م', text: 'بناء منارة الإسكندرية' },
            { year: '٣٠ ق.م', text: 'عاصمة مصر الرومانية' },
            { year: '١٧٩٨ م', text: 'وصول حملة نابليون' }
        ],
        giza: [
            { year: '٢٥٨٠ ق.م', text: 'بناء الهرم الأكبر لخوفو' },
            { year: '٢٥٠٠ ق.م', text: 'نحت تمثال أبو الهول' },
            { year: '١٧٩٨ م', text: 'معركة الأهرام' },
            { year: '٢٠٢٣ م', text: 'افتتاح المتحف المصري الكبير' }
        ],
        aswan: [
            { year: '٣٠٠٠ ق.م', text: 'بوابة مصر الجنوبية للتجارة' },
            { year: '٣٠٠ ق.م', text: 'بناء معبد فيلة البطلمي' },
            { year: '١٩٠٢ م', text: 'بناء خزان أسوان' },
            { year: '١٩٧٠ م', text: 'افتتاح السد العالي' }
        ],
        qena: [
            { year: '٣٢٠٠ ق.م', text: 'عبادة حتحور في دندرة' },
            { year: '١٠٠ ق.م', text: 'بناء معبد دندرة البطلمي' },
            { year: '١٨٠٠ م', text: 'تطوير قنا كمحطة تجارية' }
        ],
        fayyum: [
            { year: '٤٠٠٠ ق.م', text: 'أقدم الاستيطان في المنطقة' },
            { year: '١٨٥٠ ق.م', text: 'مشروع بحيرة موريس في عهد أمنمحات' },
            { year: '١٠٠ م', text: 'اشتهرت بلوحات الفيوم الجنائزية' }
        ],
        minya: [
            { year: '٣٠٠٠ ق.م', text: 'إقليم مناة خوفو' },
            { year: '١٣٥٠ ق.م', text: 'تل العمارنة عاصمة أخناتون' },
            { year: '١٨٠٠ م', text: 'تُلقب بعروس الصعيد' }
        ],
        sohag: [
            { year: '٣١٠٠ ق.م', text: 'أبيدوس موطن أوزوريس' },
            { year: '٣٠٠٠ ق.م', text: 'أقدم مدافن الملوك' },
            { year: '٣٥٠ م', text: 'الدير الأبيض والدير الأحمر' }
        ],
        'port-said': [
            { year: '١٨٥٩ م', text: 'بدء حفر قناة السويس' },
            { year: '١٨٦٩ م', text: 'افتتاح القناة باسم الخديوي سعيد' },
            { year: '١٩٥٦ م', text: 'المقاومة الباسلة والعدوان الثلاثي' }
        ],
        suez: [
            { year: '١٦٥٠ ق.م', text: 'قناة سيزوستريس القديمة' },
            { year: '١٨٦٩ م', text: 'افتتاح قناة السويس' },
            { year: '١٩٧٣ م', text: 'نصر أكتوبر' }
        ],
        matrouh: [
            { year: '٣٣١ ق.م', text: 'زيارة الإسكندر لواحة سيوة' },
            { year: '١٩٤٢ م', text: 'معركة العلمين' },
            { year: '١٩٦٠ م', text: 'تطوير السياحة الساحلية' }
        ],
        'south-sinai': [
            { year: '٣٠٠٠ ق.م', text: 'مناجم الفيروز والنحاس' },
            { year: '٥٢٧ م', text: 'دير سانت كاترين' },
            { year: '١٩٨٢ م', text: 'استعادة سيناء والتنمية السياحية' }
        ],
        dakahlia: [
            { year: '٢٦٠٠ ق.م', text: 'أرض الدلتا الخصبة' },
            { year: '١٢٥٠ م', text: 'معركة المنصورة وأسر لويس التاسع' },
            { year: '١٩٢٥ م', text: 'جامعة المنصورة' }
        ]
    };

    return timelines[id] || [
        { year: '٣١٠٠ ق.م', text: 'توحيد مصر العليا والسفلى' },
        { year: '٦٤١ م', text: 'الفتح الإسلامي لمصر' },
        { year: '١٩٥٢ م', text: 'ثورة يوليو والجمهورية' }
    ];
}

function setupEventListeners() {
    // Zoom and Layer Controls
    let currentZoom = 1.13;
    const mapEl = document.getElementById('egypt-map');

    document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
        if (currentZoom < 4) currentZoom += 0.3;
        if (mapEl) mapEl.style.transform = `scale(${currentZoom})`;
    });

    document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
        if (currentZoom > 0.7) currentZoom -= 0.3;
        if (mapEl) mapEl.style.transform = `scale(${currentZoom})`;
    });

    document.getElementById('btn-layer-toggle')?.addEventListener('click', () => {
        toggleLayerPanel();
    });

    // Detail Panel Actions (Delegation)
    document.getElementById('detail-panel')?.addEventListener('click', (e) => {
        const target = e.target;

        // 1. Close Button
        const closeBtn = target.closest('.panel-close-btn');
        if (closeBtn) {
            if (selectedRegionId) {
                unselectRegion(selectedRegionId);
            } else if (typeof toggleComparisonMode === 'function') {
                toggleComparisonMode();
            }
            return;
        }

        // 2. Tab Navigation
        const tabBtn = target.closest('.tab-btn');
        if (tabBtn) {
            const tab = tabBtn.dataset.tab;
            if (!tab) return;

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === tabBtn));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === `pane-${tab}`));

            if (typeof gsap !== 'undefined') {
                gsap.fromTo(`#pane-${tab}`, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            }
        }
    });

    if (slider) {
        const ticks = document.querySelectorAll('.hero-timeline-container .tick');
        slider.addEventListener('input', () => {
            const val = parseInt(slider.value);
            updateMode(val);
            if (ticks.length > 0) {
                ticks.forEach((t, i) => t.classList.toggle('active', i === val));
            }
        });
    }
    eraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const pos = parseInt(btn.dataset.pos);
            if (slider) {
                slider.value = pos;
                const ticks = document.querySelectorAll('.hero-timeline-container .tick');
                if (ticks.length > 0) {
                    ticks.forEach((t, i) => t.classList.toggle('active', i === pos));
                }
            }
            updateMode(pos);
        });
    });

    const bcItems = document.querySelectorAll('.bc-item');
    bcItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.pos !== undefined) {
                const pos = parseInt(item.dataset.pos);
                if (slider) {
                    slider.value = pos;
                    const ticks = document.querySelectorAll('.hero-timeline-container .tick');
                    if (ticks.length > 0) {
                        ticks.forEach((t, i) => t.classList.toggle('active', i === pos));
                    }
                }
                updateMode(pos);
            }
        });
        item.style.cursor = 'pointer';
    });
    // ===== ENHANCED MAP INTERACTION LOGIC =====
    // Single click opens region details directly. Re-clicking deselects.
    regionPaths.forEach(path => {
        path.setAttribute('tabindex', '0');
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', regionsData[path.id]?.[currentMode]?.name || path.id);

        path.addEventListener('click', (e) => {
            e.stopPropagation();

            if (comparisonMode) {
                handleComparisonSelection(path.id);
                return;
            }

            // Toggle: re-clicking same region deselects
            if (selectedRegionId === path.id) {
                unselectRegion(path.id);
                return;
            }

            // Select new region and open details
            selectedRegionId = path.id;

            // Ensure tablet-ready so detail panel is visible
            if (!document.body.classList.contains('tablet-ready')) {
                document.body.classList.add('tablet-ready');
            }

            // Pulse highlight effect on the selected path
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(path,
                    { filter: 'brightness(1.8) drop-shadow(0 0 25px rgba(var(--era-glow), 0.9))' },
                    { filter: '', duration: 1.2, ease: "power2.out" }
                );
            }

            // Update bubble with region name
            const t = translations[currentLang];
            const data = regionsData[path.id];
            if (data) {
                const name = data[currentMode]?.name || path.id;
                setBubble(name, 'var(--c-accent)', '#000');
            }

            // Open the detail panel
            window.showRegionDetails(path.id);

            // On small screens, scroll the detail panel into view
            if (window.innerWidth <= 1200) {

                if (panel) {
                    setTimeout(() => {
                        if (window.lenis) {
                            window.lenis.scrollTo(panel, { offset: -20, duration: 0.8 });
                        } else {
                            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 150);
                }
            }
        });

        // Keyboard: Enter/Space opens details
        path.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectedRegionId = path.id;
                if (!document.body.classList.contains('tablet-ready')) {
                    document.body.classList.add('tablet-ready');
                }
                window.showRegionDetails(path.id);
            }
            // Arrow key navigation between adjacent regions
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const paths = Array.from(regionPaths);
                const idx = paths.indexOf(path);
                const next = paths[(idx + 1) % paths.length];
                if (next) next.focus();
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const paths = Array.from(regionPaths);
                const idx = paths.indexOf(path);
                const prev = paths[(idx - 1 + paths.length) % paths.length];
                if (prev) prev.focus();
            }
            if (e.key === 'Escape') {
                if (selectedRegionId) unselectRegion(selectedRegionId);
                path.blur();
            }
        });

        // Double-click kept as accelerator (same behavior, prevents text selection)
        path.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        // Hover tooltip — era-aware, localized hints
        path.addEventListener('mouseenter', () => {
            if (tooltip) {
                const data = regionsData[path.id];
                const name = data?.[currentMode]?.name || path.id;
                const t = translations[currentLang];
                const hintText = currentLang === 'ar' ? 'انقر للاستكشاف'
                    : currentLang === 'de' ? 'Klicken zum Erkunden'
                        : 'Click to explore';
                const eraIcon = currentMode === 'ancient' ? '𓉐' : currentMode === 'transitional' ? '🕌' : '📍';
                tooltip.innerHTML = `
                    <div style="font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 6px;">
                        <span style="font-size: 1.2rem;">${eraIcon}</span> ${name}
                    </div>
                    <div style="font-size: 0.6rem; opacity: 0.6; margin-top: 3px; letter-spacing: 0.5px;">${hintText}</div>
                `;
                tooltip.classList.add('visible');
            }

            // Subtle neighbor dimming for focus
            if (!selectedRegionId) {
                regionPaths.forEach(rp => {
                    if (rp !== path) rp.style.opacity = '0.4';
                });
            }
        });

        path.addEventListener('mousemove', (e) => {
            // Position handled by global ticker in index.html for performance
        });

        path.addEventListener('mouseleave', () => {
            if (tooltip) tooltip.classList.remove('visible');
            // Restore neighbor opacity
            regionPaths.forEach(rp => {
                rp.style.opacity = '';
            });
        });
    });

    // Clicking empty map area deselects the current region
    const mapSvg = document.getElementById('egypt-map');
    if (mapSvg) {
        mapSvg.addEventListener('click', (e) => {
            // Only fire if the click target is NOT a region path
            if (!e.target.classList.contains('region') && selectedRegionId) {
                unselectRegion(selectedRegionId);
            }
        });
    }

    // Move universal listeners OUTSIDE the region loop
    const panelBody = document.querySelector('.panel-body');
    const scrollProgress = document.querySelector('.panel-scroll-progress');
    const scrollHint = document.querySelector('.scroll-hint');

    if (panelBody) {
        panelBody.addEventListener('scroll', () => {
            if (scrollProgress) {
                const totalHeight = panelBody.scrollHeight - panelBody.clientHeight;
                if (totalHeight <= 0) {
                    scrollProgress.style.width = '0%';
                } else {
                    const progress = (panelBody.scrollTop / totalHeight) * 100;
                    scrollProgress.style.width = progress + '%';
                }
            }

            if (scrollHint) {
                if (panelBody.scrollTop > 20) {
                    scrollHint.classList.add('hidden');
                } else if (panelBody.scrollHeight > panelBody.clientHeight) {
                    scrollHint.classList.remove('hidden');
                }
            }

            const header = document.querySelector('.gov-header');
            if (header) {
                if (panelBody.scrollTop > 40) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });

        panelBody.addEventListener('mouseenter', () => {
            if (window.lenis && panelBody.scrollHeight > panelBody.clientHeight) {
                window.lenis.stop();
            }
        });

        panelBody.addEventListener('mouseleave', () => {
            if (window.lenis) {
                window.lenis.start();
            }
        });
    }

    // Tab switching listener removed here as it is now handled by delegation in setupEventListeners

    // Footer Era Links - set up once
    document.querySelectorAll('.footer-era-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pos = parseInt(link.dataset.pos);
            if (typeof window.updateMode === 'function') {
                window.updateMode(pos);
            }
            if (window.slider) window.slider.value = pos;

            const hero = document.getElementById('hero');
            if (hero) {
                if (window.lenis) window.lenis.scrollTo(hero, { duration: 1.2 });
                else hero.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Footer Back to Top - set up once
    const btt = document.getElementById('footer-back-to-top');
    if (btt) {
        btt.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1.5 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// Initialize
function initialize() {
    // Core map functionality MUST run first
    try {
        init();
    } catch (e) {
        console.error('Map init failed:', e);
    }

    // Smooth scroll (Lenis) and Global GSAP config
    try {
        if (typeof gsap !== 'undefined') {
            gsap.config({ force3D: true, autoSleep: 60 });
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.config({
                    limitCallbacks: true,
                    ignoreMobileResize: true,
                    syncInterval: 100
                });
            }
        }
        if (typeof Lenis !== 'undefined') {
            window.lenis = new Lenis({
                lerp: 0.1,             // Slightly more responsive
                duration: 1.0,          // Faster transition
                touchMultiplier: 2.0,   // Better mobile feel
                wheelMultiplier: 1.0,
                syncTouch: true,
                smoothWheel: true,
                autoRaf: true           // Let Lenis handle its own RAF for better perf
            });

            const progressBar = document.querySelector('.scroll-progress-bar');
            let scrollTimeout;

            // Optimized scroll listener
            window.lenis.on('scroll', ({ velocity, progress }) => {
                if (progressBar) {
                    progressBar.style.width = `${progress * 100}%`;
                }

                // Debounced class toggle to prevent excessive reflows
                if (Math.abs(velocity) > 8) {
                    if (!document.body.classList.contains('is-scrolling')) {
                        document.body.classList.add('is-scrolling');
                    }
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        document.body.classList.remove('is-scrolling');
                    }, 150);
                }
            });

            // No manual RAF needed if autoRaf is true, but keep it for ScrollTrigger if needed
            function raf(time) {
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
    } catch (e) {
        console.warn('Smooth scroll initialization failed:', e);
    }

    // Optimized Tablet tilt using GSAP (better sync with ticker)
    try {
        const tablet = document.querySelector('#hero-tablet .tablet-container');
        if (tablet && typeof gsap !== 'undefined') {
            let scrollProgress = 0;
            const onScroll = () => {
                const top = window.pageYOffset || document.documentElement.scrollTop;
                const hero = document.querySelector('.hero');
                const scrollThreshold = hero ? hero.offsetHeight * 0.3 : 300;
                scrollProgress = Math.min(top / scrollThreshold, 1);

                if (scrollProgress >= 1) document.body.classList.add('tablet-ready');
                else document.body.classList.remove('tablet-ready');

                const targetRot = 35 * (1 - scrollProgress);
                const targetLift = -60 + (scrollProgress * 130);
                const targetShiftX = -210 * (1 - scrollProgress);
                const finalScale = scrollProgress >= 1 ? (1.15 * 0.95) : 1.15;

                gsap.to(tablet, {
                    rotateX: targetRot,
                    translateY: targetLift,
                    translateX: targetShiftX,
                    scale: finalScale,
                    rotateY: 0, // Ensure rotateY is reset from any previous mouse movement
                    duration: 0.8,
                    ease: "power2.out",
                    overwrite: 'auto'
                });
            };

            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }
    } catch (e) {
        console.warn('Tablet tilt effect failed:', e);
    }

    // Nav scroll and Preloader removal
    try {
        const nav = document.querySelector('.site-nav');
        if (nav) {
            let isScrolled = false;
            const scrollSource = window.lenis || window;
            const handleScroll = () => {
                const scrollY = window.lenis?.scroll || window.scrollY;
                const hero = document.querySelector('.hero');
                const heroHeight = hero ? hero.offsetHeight : 800;

                // Toggle past-hero class when we scroll past the threshold
                // We use heroHeight - 80 to transition slightly before the very end
                nav.classList.toggle('past-hero', scrollY > (heroHeight - 80));

                const hasScrolled = scrollY > 50;
                if (hasScrolled !== isScrolled) {
                    isScrolled = hasScrolled;
                    nav.classList.toggle('scrolled', isScrolled);
                }
            };
            if (window.lenis) window.lenis.on('scroll', handleScroll);
            else window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial check
        }

        const preloader = document.getElementById('preloader');
        // Preloader now strictly handled by startJourney() 
        // No automatic removal here anymore as per request

        // 🟢 Here-bubble follows cursor over hero & interacts with elements
        const heroSection = document.querySelector('.hero');
        if (heroBubble && heroSection) {
            document.addEventListener('mousemove', (e) => {
                heroBubble.style.left = e.clientX + 'px';
                heroBubble.style.top = e.clientY + 'px';
            });

            heroSection.addEventListener('mouseenter', () => {
                const t = translations[currentLang];
                heroBubble.style.opacity = '1';
                const xOffset = t.dir === 'rtl' ? '12px' : '-12px';
                const xTrans = t.dir === 'rtl' ? '0%' : '-100%';
                heroBubble.style.transform = `translate(${xTrans}, -50%) translate(${xOffset}, 0) scale(1)`;
            });
            heroSection.addEventListener('mouseleave', () => {
                const t = translations[currentLang];
                heroBubble.style.opacity = '0';
                const xOffset = t.dir === 'rtl' ? '12px' : '-12px';
                const xTrans = t.dir === 'rtl' ? '0%' : '-100%';
                heroBubble.style.transform = `translate(${xTrans}, -50%) translate(${xOffset}, 0) scale(0.8)`;
                resetBubble();
            });

            // Click bubble to scroll to map
            heroBubble.addEventListener('click', () => {
                const mapEl = document.getElementById('hero-map');
                if (mapEl) window.lenis ? window.lenis.scrollTo(mapEl, { offset: -80 }) : mapEl.scrollIntoView({ behavior: 'smooth' });
            });

            // Regions interaction inside bubble logic
            document.querySelectorAll('.region').forEach(path => {
                path.addEventListener('mouseenter', () => {
                    const d = regionsData[path.id];
                    if (d) {
                        const t = translations[currentLang];
                        const data = d[currentLang]?.[currentMode] || d[currentMode];
                        if (data) {
                            setBubble(`
                                <div style="font-size:1.1rem; font-weight:800; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:4px; margin-bottom:4px;">
                                    ${data.name}
                                </div>
                                <div style="font-size:0.75rem; opacity:0.8; display:grid; grid-template-columns:auto 1fr; gap:8px; line-height:1.4;">
                                    <span>${t.bubble_capital}</span> <strong>${data.capital}</strong>
                                    <span>${t.bubble_symbol}</span> <strong>${data.symbol || '🏛'}</strong>
                                    <span>${t.bubble_ruler}</span> <strong>${data.ruler || (currentMode === 'ancient' ? t.ruler_ancient : t.ruler_modern)}</strong>
                                </div>
                            `, 'var(--c-surface)', 'var(--c-text)');
                            heroBubble.style.padding = '15px 25px';
                            heroBubble.style.borderRadius = '20px';
                            heroBubble.style.borderColor = 'var(--c-accent)';

                            const xOffset = t.dir === 'rtl' ? '12px' : '-12px';
                            const xTrans = t.dir === 'rtl' ? '0%' : '-100%';
                            heroBubble.style.transform = `translate(${xTrans}, -50%) translate(${xOffset}, 0) scale(1)`;

                            path.style.filter = 'drop-shadow(0 0 12px var(--c-accent))';
                        }
                    }
                });
                path.addEventListener('mouseleave', () => {
                    resetBubble();
                    const t = translations[currentLang];
                    heroBubble.style.padding = '10px 24px';
                    heroBubble.style.borderRadius = '100px';
                    heroBubble.style.borderColor = 'var(--c-purple)';

                    const xOffset = t.dir === 'rtl' ? '12px' : '-12px';
                    const xTrans = t.dir === 'rtl' ? '0%' : '-100%';
                    heroBubble.style.transform = `translate(${xTrans}, -50%) translate(${xOffset}, 0) scale(1)`;

                    path.style.filter = '';
                });
            });

            // Hide bubble on buttons
            heroSection.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
                btn.addEventListener('mouseenter', () => { heroBubble.style.opacity = '0'; });
                btn.addEventListener('mouseleave', () => { heroBubble.style.opacity = '1'; resetBubble(); });
            });
        }
    } catch (e) {
        console.warn('UI initialization failed:', e);
    }

    // GSAP Scroll Reveals
    try {
        initGSAPAnimations();
    } catch (e) {
        console.warn('GSAP animations failed:', e);
    }
}

function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // reveal fade/bottom/right/left/scale
    document.querySelectorAll('[data-reveal]').forEach(el => {
        const type = el.dataset.reveal;
        const config = {
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        };

        const delay = parseFloat(el.dataset.delay) || 0;
        if (delay) config.delay = delay;

        if (type === 'fade' || type === 'bottom') config.y = 0;
        if (type === 'right' || type === 'left') config.x = 0;
        if (type === 'scale') config.scale = 1;

        gsap.to(el, config);
    });

    // NEW: 3D Tilt for interactive cards on hover
    document.querySelectorAll('.intel-node, .codex-main, .codex-sidebar, .ledger-card, .hub-side, .journey-stage').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
            const rotateY = ((x - centerX) / centerX) * 5;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });


    // NEW: Legacy background text parallax
    gsap.to('.legacy-bg-text', {
        x: -100,
        scrollTrigger: {
            trigger: '.legacy-impact-section',
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });

    // NEW: Era Journey Parallax for background numbers
    document.querySelectorAll('.stage-bg-num').forEach(num => {
        gsap.to(num, {
            y: -150,
            scrollTrigger: {
                trigger: num.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });
    });

    // NEW: Thematic Narrative Cinematic Parallax Zoom + 3D Fold Effect
    if (document.querySelector('.thematic-narrative')) {
        gsap.set('.thematic-narrative', { transformPerspective: 1200 });
        gsap.fromTo('.thematic-narrative',
            {
                scale: 0.45,
                opacity: 0,
                y: 200,
                rotateX: -55,
                transformOrigin: "top center",
                filter: "blur(15px)"
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                ease: "expo.out",
                scrollTrigger: {
                    trigger: '.comparison-metronome',
                    start: "center bottom",
                    end: "bottom center",
                    scrub: 1.5
                }
            }
        );
    }

    // Complex Orbital persistent floating animation
    document.querySelectorAll('.complex-orbital').forEach(orb => {
        gsap.to(orb, {
            y: -20,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // NEW: Stat counter animation
    document.querySelectorAll('.stat-num').forEach(num => {
        const target = parseInt(num.dataset.count);
        gsap.to(num, {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: num,
                start: "top 90%"
            },
            onUpdate: function () {
                const val = Math.floor(this.targets()[0].innerText);
                const loc = translations[currentLang]?.locale || 'en-US';
                num.innerText = val.toLocaleString(loc);
            }
        });
    });

    // Synthesis Bridge: Count-up for 42 and 27
    document.querySelectorAll('.quant-val').forEach(el => {
        const rawText = el.innerText.trim();
        // Prioritize data-count, otherwise parse Arabic text
        let finalVal = parseInt(el.dataset.count);

        if (isNaN(finalVal)) {
            const western = rawText.replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
            finalVal = parseInt(western);
        }

        // Final fallback
        if (isNaN(finalVal)) {
            if (rawText.includes('٤٢')) finalVal = 42;
            else if (rawText.includes('٢٧')) finalVal = 27;
            else finalVal = 0;
        }

        const obj = { n: 0 };
        el.innerText = '٠';

        gsap.to(obj, {
            n: finalVal,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            },
            onUpdate: function () {
                const val = Math.floor(obj.n);
                if (!isNaN(val)) {
                    const loc = translations[currentLang]?.locale || 'en-US';
                    el.innerText = val.toLocaleString(loc);
                }
            }
        });
    });


    // Nexus particle floating
    gsap.to('.nexus-particle', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // NEW: Pillar Gallery Scroll Animation (Horizontal expansion on scroll)
    const pillarsSection = document.querySelector('.pillar-gallery-section');
    const pillars = gsap.utils.toArray('.pillar-item');
    if (pillarsSection && pillars.length > 0) {
        const totalPillars = pillars.length;

        // Only run horizontal expansion on desktop
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1201px)", () => {
            // Create a dedicated timeline for the pillar expansion
            const pillarTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".pillar-gallery-section",
                    start: "top top+=60px",
                    end: `+=${totalPillars * 100}%`, // Standard scroll distance
                    pin: true,
                    scrub: 0.4, // Lower for more immediate feedback
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,

                }
            });

            // Set initial state for card 0
            pillarTl.set(pillars[0], { flexGrow: 4 }, 0);
            pillars[0].classList.add('active');

            // Build the timeline transitions
            pillars.forEach((pillar, i) => {
                if (i < totalPillars - 1) {
                    const nextPillar = pillars[i + 1];

                    // Transition step i
                    pillarTl.to(pillar, {
                        flexGrow: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        onStart: () => {
                            // When scrolling forward, cards gain/lose active state
                            pillar.classList.remove('active');
                            nextPillar.classList.add('active');
                        },
                        onReverseComplete: () => {
                            // When scrolling back
                            nextPillar.classList.remove('active');
                            pillar.classList.add('active');
                        }
                    }, i);

                    pillarTl.to(nextPillar, {
                        flexGrow: 4,
                        duration: 1,
                        ease: "power2.inOut"
                    }, i);
                }
            });

            // Buffer at the end
            pillarTl.to({}, { duration: 0.5 });

            return () => {
                pillarsSection.classList.remove('is-active');
                pillars.forEach(p => {
                    p.style.flexGrow = '';
                    p.classList.remove('active');
                });
                // Restore initial first active if needed
                pillars[0].classList.add('active');
            };
        });
    }


}

// Comparison Mode Logic
let comparisonMode = false;
let comparisonRegions = [];

function toggleComparisonMode() {
    const wasInComparison = comparisonMode;
    const firstRegionBeforeReset = comparisonRegions[0];

    comparisonMode = !comparisonMode;
    comparisonRegions = [];

    // Toggle body class for dimming effect
    document.body.classList.toggle('comparison-active', comparisonMode);

    // Clear selection state on map
    if (regionPaths) {
        regionPaths.forEach(p => p.classList.remove('selected', 'comparing'));
    }

    const t = translations[currentLang];
    const btn = document.getElementById('btn-comparison');
    if (btn) {
        btn.classList.toggle('active', comparisonMode);
        const btnSpan = btn.querySelector('span');
        if (btnSpan) btnSpan.textContent = comparisonMode ? t.comp_off : t.comp_on;
    }

    const hudActiveName = document.getElementById('hud-active-name');

    if (comparisonMode) {
        setBubble(t.comp_select, 'var(--c-gold)', '#000');
        if (panelPlaceholder) panelPlaceholder?.classList.remove('hidden');
        if (panelContent) panelContent?.classList.add('hidden');

        const emptyTitle = document.querySelector('.empty-title');
        const emptySub = document.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = t.comp_active;
        if (emptySub) emptySub.textContent = t.comp_pick_first;
        if (hudActiveName) hudActiveName.textContent = t.comp_pick_first_hud;
    } else {
        resetBubble();
        resetHUDHighlight();
        selectedRegionId = null;
        document.body.classList.remove('comparison-active');

        if (panelContent && originalPanelHTML) {
            panelContent.innerHTML = originalPanelHTML;
        }

        if (panelPlaceholder) panelPlaceholder?.classList.remove('hidden');
        if (panelContent) panelContent?.classList.add('hidden');

        const emptyTitle = document.querySelector('.empty-title');
        const emptySub = document.querySelector('.empty-sub');
        if (emptyTitle) emptyTitle.textContent = t.empty_title_default;
        if (emptySub) emptySub.textContent = t.empty_sub_default;
    }
}
window.toggleComparisonMode = toggleComparisonMode;

function unselectRegion(id) {
    if (comparisonMode) {
        if (comparisonRegions.includes(id)) {
            comparisonRegions = comparisonRegions.filter(rid => rid !== id);
            const path = document.getElementById(id);
            if (path) path.classList.remove('comparing');

            if (comparisonRegions.length === 0) {
                setBubble(t.comp_select, 'var(--c-gold)', '#000');
                const emptyTitle = panelPlaceholder?.querySelector('.empty-title');
                const emptySub = panelPlaceholder?.querySelector('.empty-sub');
                if (emptyTitle) emptyTitle.textContent = t.comp_active;
                if (emptySub) emptySub.textContent = t.comp_pick_first_sub;
            } else {
                setBubble(t.comp_pick_second, 'var(--c-accent)', '#fff');
                const emptySub = panelPlaceholder?.querySelector('.empty-sub');
                if (emptySub) emptySub.textContent = t.comp_pick_second_sub;
                if (panelContent) panelContent?.classList.add('hidden');
                if (panelPlaceholder) panelPlaceholder?.classList.remove('hidden');
            }
        }
    } else {
        if (selectedRegionId === id) {
            selectedRegionId = null;
            const path = document.getElementById(id);
            if (path) path.classList.remove('selected');
            if (panelPlaceholder) panelPlaceholder?.classList.remove('hidden');
            if (panelContent) panelContent?.classList.add('hidden');
            resetBubble();
            resetHUDHighlight();
        }
    }
}

function handleComparisonSelection(id) {
    if (comparisonRegions.includes(id)) return;

    const t = translations[currentLang];
    comparisonRegions.push(id);
    const path = document.getElementById(id);
    if (path) path.classList.add('comparing');

    if (comparisonRegions.length === 1) {
        setBubble(t.comp_pick_second, 'var(--c-accent)', '#fff');
        const emptyTitle = panelPlaceholder?.querySelector('.empty-title');
        const emptySub = panelPlaceholder?.querySelector('.empty-sub');
        if (emptyTitle) {
            const data = regionsData[id];
            let name = id;
            if (data) {
                if (data[currentLang] && data[currentLang][currentMode]) name = data[currentLang][currentMode].name;
                else if (data[currentMode]) name = data[currentMode].name;
            }
            emptyTitle.textContent = t.comp_selected + name;
        }
        if (emptySub) emptySub.textContent = t.comp_pick_second_sub;
    } else if (comparisonRegions.length === 2) {
        showComparisonResults();
        setBubble(t.comp_success, 'var(--c-teal)', '#fff');
        setTimeout(resetBubble, 3000);
    }
}

function showComparisonResults() {
    const t = translations[currentLang];
    const id1 = comparisonRegions[0];
    const id2 = comparisonRegions[1];

    // Language-aware data fetch
    const getModeData = (id) => {
        const data = regionsData[id];
        if (data[currentLang] && data[currentLang][currentMode]) return data[currentLang][currentMode];
        return data[currentMode]; // Arabic fallback
    };

    const data1 = getModeData(id1);
    const data2 = getModeData(id2);

    const areaMap = {
        luxor: 2960, aswan: 679, cairo: 3085, alexandria: 2679, giza: 85153,
        ismailia: 5067, asyut: 1553, qena: 1851, fayyum: 6068, sharqia: 4911,
        beheira: 10130, 'north-sinai': 27574, 'red-sea': 203685, matrouh: 166563,
        'new-valley': 440098, benisuef: 1322, qalyubia: 1001, menofia: 2543,
        gharbiah: 1942, minya: 2262, sohag: 1547, 'kafr-el-sheikh': 3437,
        dakahlia: 3471, 'port-said': 1351, suez: 17840, damietta: 589,
        'south-sinai': 33140, disputed: 2060, halaib: 20580
    };
    const monumentMap = {
        luxor: 14, aswan: 8, cairo: 23, alexandria: 9, giza: 11,
        ismailia: 3, asyut: 6, qena: 7, fayyum: 5, sharqia: 6,
        beheira: 4, 'north-sinai': 5, 'red-sea': 4, matrouh: 3,
        'new-valley': 4, benisuef: 3, qalyubia: 4, menofia: 2,
        gharbiah: 5, minya: 7, sohag: 8
    };

    const symbols = {
        ancient: '𓂀',
        transitional: '🕌',
        modern: '🏛️'
    };

    const formatNum = (n) => {
        if (currentLang === 'ar') {
            const ar = '٠١٢٣٤٥٦٧٨٩';
            return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/\d/g, d => ar[d]);
        }
        return n.toLocaleString(currentLang === 'de' ? 'de-DE' : 'en-US');
    };

    const area1 = areaMap[id1] || 0;
    const area2 = areaMap[id2] || 0;
    const mon1 = monumentMap[id1] || 2;
    const mon2 = monumentMap[id2] || 2;

    const maxArea = Math.max(area1, area2, 1);
    const maxMon = Math.max(mon1, mon2, 1);

    const isLarger1 = area1 > area2;

    panelPlaceholder?.classList.add('hidden');
    panelContent?.classList.remove('hidden');

    panelContent.innerHTML = `
        <div class="comparison-container premium-dashboard">
            <div class="comp-header">
                <div class="comp-title-group">
                    <span class="comp-badge active-blink">${symbols[currentMode]} ${t.comparison_title}</span>
                    <h3>${t.comp_main_title}</h3>
                </div>
                <button class="panel-close-btn" onclick="window.toggleComparisonMode()">✕</button>
            </div>
            
            <div class="comp-hero-grid">
                <div class="comp-region-card r1 ${isLarger1 ? 'winner-glow' : ''}">
                    ${isLarger1 ? `<div class="winner-label">${t.winner_label}</div>` : ''}
                    <div class="region-meta">${symbols[currentMode]} ${currentMode === 'ancient' ? t.comp_nome : t.comp_gov}</div>
                    <div class="region-name">${data1.name}</div>
                    <div class="region-cap">${data1.capital}</div>
                </div>
                <div class="comp-vs-divider">
                    <div class="vs-line"></div>
                    <div class="vs-hex">${t.vs}</div>
                    <div class="vs-line"></div>
                </div>
                <div class="comp-region-card r2 ${!isLarger1 && area1 !== area2 ? 'winner-glow' : ''}">
                    ${!isLarger1 && area1 !== area2 ? `<div class="winner-label">${t.winner_label}</div>` : ''}
                    <div class="region-meta">${symbols[currentMode]} ${currentMode === 'ancient' ? t.comp_nome : t.comp_gov}</div>
                    <div class="region-name">${data2.name}</div>
                    <div class="region-cap">${data2.capital}</div>
                </div>
            </div>

            <div class="comp-stats-section">
                <!-- Area Row -->
                <div class="comp-stat-row">
                    <div class="stat-header">
                        <span class="stat-label">${t.comp_area_label}</span>
                        <span class="stat-unit">${t.area_unit}</span>
                    </div>
                    <div class="dual-bars">
                        <div class="progress-container">
                            <div class="progress-bar b1" style="width: 0%" data-target="${Math.round((area1 / maxArea) * 100)}%">
                                <span class="val">${formatNum(area1)}</span>
                            </div>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar b2" style="width: 0%" data-target="${Math.round((area2 / maxArea) * 100)}%">
                                <span class="val">${formatNum(area2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Monuments Row -->
                <div class="comp-stat-row">
                    <div class="stat-header">
                        <span class="stat-label">${t.comp_heritage_label}</span>
                        <span class="stat-unit">${t.detail_impact}</span>
                    </div>
                    <div class="dual-bars">
                        <div class="progress-container mini">
                            <div class="progress-bar b-alt-1" style="width: 0%" data-target="${Math.round((mon1 / maxMon) * 100)}%">
                                <span class="val">${formatNum(mon1)} ${t.comp_site_unit}</span>
                            </div>
                        </div>
                        <div class="progress-container mini">
                            <div class="progress-bar b-alt-2" style="width: 0%" data-target="${Math.round((mon2 / maxMon) * 100)}%">
                                <span class="val">${formatNum(mon2)} ${t.comp_site_unit}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="comp-records-grid">
                <div class="record-box">
                    <div class="record-tag">${t.comp_archive_a}</div>
                    <p>${data1.detail.substring(0, 140)}...</p>
                </div>
                <div class="record-box">
                    <div class="record-tag">${t.comp_archive_b}</div>
                    <p>${data2.detail.substring(0, 140)}...</p>
                </div>
            </div>

            <footer class="comp-footer">
                <div class="analysis-verdict">
                    <span class="v-icon">📜</span>
                    <p>
                        ${t.comp_verdict_base
            .replace('{0}', area1 > area2 ? data1.name : data2.name)
            .replace('{1}', t.comp_verdict_larger)
            .replace('{2}', mon1 > mon2 ? data1.name : data2.name)
            .replace('{3}', t.comp_verdict_heritage)}
                    </p>
                </div>
                <button class="wiki-btn gold-btn" style="width: 100%; margin-top: 15px;" onclick="window.toggleComparisonMode()">
                    <span>${t.comp_end_session}</span>
                </button>
            </footer>
        </div>
    `;

    // Sync bar animations
    setTimeout(() => {
        panelContent.querySelectorAll('.progress-bar').forEach(bar => {
            bar.style.width = bar.dataset.target;
        });
    }, 150);

    if (typeof gsap !== 'undefined') {
        gsap.from('.comparison-container > *', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.out"
        });

        // Micro-anim for winner labels
        gsap.from('.winner-label', {
            scale: 0,
            opacity: 0,
            delay: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    }
}

if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', initialize);
else initialize();

// ===== LAYER PANEL CONTROLS =====

window.toggleLayerPanel = function () {
    const panel = document.getElementById("layer-panel");
    if (panel) panel.classList.toggle("hidden");
};

window.toggleThematicLayer = function (layerId) {
    const map = document.getElementById("egypt-map");
    if (!map) return;

    // Toggle a class on the map/body to trigger visual changes via CSS
    const layerClass = "layer-" + layerId + "-active";
    document.body.classList.toggle(layerClass);

    // Update description for first-time activation
    const desc = document.getElementById("layer-desc");
    const isActive = document.body.classList.contains(layerClass);
    const t = translations[currentLang];
    if (desc) {
        if (layerId === 'sites') desc.textContent = isActive ? t.layer_sites_on : t.layer_sites_off;
        if (layerId === 'routes') desc.textContent = isActive ? t.layer_routes_on : t.layer_routes_off;
    }
};

window.toggleLabels = function () {
    const map = document.getElementById("egypt-map");
    if (map) map.classList.toggle("hide-labels");
};

window.setBaseTheme = function (themeId) {
    // Remove old theme classes
    document.body.classList.remove("theme-parchment", "theme-satellite", "theme-minimal");
    document.body.classList.add("theme-" + themeId);

    // Update UI selection highlights
    const opts = document.querySelectorAll(".theme-opt");
    opts.forEach(opt => opt.classList.toggle("active", opt.dataset.theme === themeId));
};

window.updateOpacity = function (val) {
    const map = document.getElementById("egypt-map");
    if (map) {
        map.style.opacity = val / 100;
        document.documentElement.style.setProperty("--map-opacity", val / 100);
    }
};



// Stop clicks on the layer panel from reaching the map
const lPanel = document.getElementById("layer-panel");
if (lPanel) {
    lPanel.addEventListener("click", (e) => e.stopPropagation());
    lPanel.addEventListener("mousedown", (e) => e.stopPropagation());
    lPanel.addEventListener("dblclick", (e) => e.stopPropagation());
}

// ===== ERA JOURNEY SCROLL LOGIC & GENERIC REVEALS =====
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

        // 1. Generic Reveals (direction-aware)
        const isLTR = document.documentElement.dir === 'ltr';
        const revealElements = gsap.utils.toArray('[data-reveal]');
        // Add will-change to elements being animated on scroll
        gsap.set(revealElements, { willChange: "transform, opacity" });

        revealElements.forEach(elem => {
            let y = 0, x = 0, scale = 1;
            const type = elem.getAttribute('data-reveal');

            if (type === 'fade') y = 20;
            else if (type === 'bottom') y = 50;
            else if (type === 'right') x = isLTR ? -40 : 40;
            else if (type === 'left') x = isLTR ? 40 : -40;
            else if (type === 'scale') scale = 0.9;

            gsap.fromTo(elem,
                { autoAlpha: 0, x: x, y: y, scale: scale },
                {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 90%", // Trigger slightly later for performance
                        toggleActions: "play none none reverse",
                        fastScrollEnd: true // Performance boost
                    },
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 1, // Slightly faster
                    ease: "power2.out",
                    onComplete: () => {
                        // Clean up will-change after animation
                        gsap.set(elem, { clearProps: "willChange" });
                    }
                }
            );
        });
    }
});

/* ===== INTERACTIVE HUD GUIDE ===== */
let currentGuideStep = 0;
const guideStepsTrans = {
    ar: [
        { id: 'search', title: 'قاعدة البيانات المركزية', text: 'محرك بحث متطور يتيح لك الوصول الفوري لأي بقعة جغرافية في التاريخ المصري بلمح البصر.' },
        { id: 'zoom', title: 'التحكم الهيكلي', text: 'أدوات ضبط المقياس؛ تتيح لك الانتقال من الرؤية الشمولية للأقاليم إلى التفاصيل الدقيقة لكل محافظة.' },
        { id: 'layers', title: 'تخصيص العرض', text: 'هنا يمكنك التحكم في طبقات البيانات، من إظهار الطرق التاريخية إلى تبديل نمط الخريطة بالكامل.' },
        { id: 'compare', title: 'محلل التباين', text: 'فعل هذا الوضع لاختيار منطقتين وإجراء مقارنة إحصائية وجغرافية فورية بين تطورهما الإداري.' },
        { id: 'counter', title: 'فهرس الوحدات الحية', text: 'عداد ذكي يعكس إجمالي الوحدات الإدارية المسجلة حالياً في الأرشيف طبقاً لبروتوكول الحقبة المفعلة.' },
        { id: 'status', title: 'مسجل الإحداثيات', text: 'مُسجل تفاعلي يحدد الموقع النشط حالياً مع نبضات "أورب" بصرية تتبع عملية المسح التاريخي.' },
        { id: 'protocol', title: 'البروتوكول الملكي', text: 'تبديل سريع بين العصور المختلفة (فرعوني، إسلامي، حديث) مع تغيير شامل في نظام التصنيف والبصيرة.' }
    ],
    en: [
        { id: 'search', title: 'Central Database', text: 'Advanced search engine allowing instant access to any geographical spot in Egyptian history.' },
        { id: 'zoom', title: 'Structural Control', text: 'Scaling tools; transition from a holistic view of regions to granular provincial details.' },
        { id: 'layers', title: 'Display Customization', text: 'Control data layers here, from historical roads to complete map style toggles.' },
        { id: 'compare', title: 'Contrast Analyzer', text: 'Activate this mode to pick two regions and perform instant statistical comparisons.' },
        { id: 'counter', title: 'Live Unit Index', text: 'Smart counter reflecting total administrative units registered in the current Archive protocol.' },
        { id: 'status', title: 'Coordinate Logger', text: 'Interactive logger tracking the active location with visual "Orb" pulses.' },
        { id: 'protocol', title: 'Royal Protocol', text: 'Rapid switching between eras (Pharaonic, Islamic, Modern) with complete reclassification.' }
    ],
    de: [
        { id: 'search', title: 'Zentrale Datenbank', text: 'Fortschrittliche Suchmaschine für den sofortigen Zugriff auf jeden geografischen Punkt.' },
        { id: 'zoom', title: 'Strukturkontrolle', text: 'Werkzeuge zur Skalierung; Wechsel von der ganzheitlichen Regionssicht zu Details.' },
        { id: 'layers', title: 'Anzeige-Anpassung', text: 'Steuern Sie hier Datenschichten, von historischen Straßen bis zu Kartenstilen.' },
        { id: 'compare', title: 'Kontrastanalysator', text: 'Aktivieren Sie diesen Modus, um zwei Regionen statistisch zu vergleichen.' },
        { id: 'counter', title: 'Live-Einheitenindex', text: 'Intelligenter Zähler, der die im aktuellen Protokoll registrierten Einheiten anzeigt.' },
        { id: 'status', title: 'Koordinaten-Logger', text: 'Interaktiver Logger, der den aktiven Standort verfolgt.' },
        { id: 'protocol', title: 'Königliches Protokoll', text: 'Schneller Wechsel zwischen Epochen mit vollständiger Neuklassifizierung.' }
    ]
};

window.startHUDGuide = function () {
    const overlay = document.getElementById('hud-guide-overlay');
    const galaBot = document.getElementById('gala-bot');
    if (!overlay) return;

    // Create dots once
    const dotsContainer = document.getElementById('guide-dots');
    const steps = guideStepsTrans[currentLang];
    if (dotsContainer) {
        dotsContainer.innerHTML = steps.map((_, i) => `<div class="guide-dot ${i === 0 ? 'active' : ''}"></div>`).join('');
    }

    if (galaBot) galaBot.classList.add('hidden');
    currentGuideStep = 0;
    overlay.classList.remove('hidden');
    updateGuideStep();
};

window.closeHUDGuide = function () {
    const overlay = document.getElementById('hud-guide-overlay');
    const galaBot = document.getElementById('gala-bot');
    const highlight = document.querySelector('.guide-highlight');

    if (overlay) overlay.classList.add('hidden');
    if (galaBot) galaBot.classList.remove('hidden');

    if (highlight) highlight.style.opacity = '0';
    document.querySelectorAll('.guide-target-active').forEach(el => el.classList.remove('guide-target-active'));
    currentGuideStep = 0;
};

window.nextGuideStep = function () {
    currentGuideStep++;
    const steps = guideStepsTrans[currentLang];
    if (currentGuideStep >= steps.length) {
        closeHUDGuide();
    } else {
        updateGuideStep();
    }
};

function updateGuideStep() {
    const steps = guideStepsTrans[currentLang];
    const step = steps[currentGuideStep];
    const titleEl = document.getElementById('guide-title');
    const textEl = document.getElementById('guide-text');
    const stepEl = document.getElementById('guide-current-step');
    const highlight = document.querySelector('.guide-highlight');
    const nextBtn = document.querySelector('.guide-btn.next');
    const dots = document.querySelectorAll('.guide-dot');

    // Update dots
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentGuideStep));

    // Reset previous actives
    document.querySelectorAll('.guide-target-active').forEach(el => el.classList.remove('guide-target-active'));

    if (titleEl) {
        titleEl.innerText = step.title;
        gsap.fromTo(titleEl, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 });
    }
    if (textEl) {
        textEl.innerText = step.text;
        gsap.fromTo(textEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 });
    }
    if (stepEl) stepEl.innerText = (currentGuideStep + 1);
    if (nextBtn) {
        const isLast = currentGuideStep === steps.length - 1;
        if (currentLang === 'ar') {
            nextBtn.innerText = isLast ? 'موافق، فهمت' : 'الخطوة التالية ➔';
        } else if (currentLang === 'en') {
            nextBtn.innerText = isLast ? 'OK, I Got It' : 'Next Step ➔';
        } else {
            nextBtn.innerText = isLast ? 'OK, Verstanden' : 'Nächster Schritt ➔';
        }
    }

    const targets = document.querySelectorAll(`[data-guide="${step.id}"]`);
    if (targets.length > 0 && highlight) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        targets.forEach(target => {
            target.classList.add('guide-target-active');
            const rect = target.getBoundingClientRect();
            minX = Math.min(minX, rect.left);
            minY = Math.min(minY, rect.top);
            maxX = Math.max(maxX, rect.right);
            maxY = Math.max(maxY, rect.bottom);
        });

        const parentOverlay = document.getElementById('hud-guide-overlay');
        const parentRect = parentOverlay.getBoundingClientRect();
        const guideBox = document.querySelector('.guide-box');

        // 🧠 INTELLECTUAL NORMALIZATION: Account for CSS transforms/scaling of the tablet container
        // getBoundingClientRect returns VIEWPORT pixels, but .style.top uses LOCAL pixels.
        // We divide by the current scale factor to map them back correctly.
        const scaleX = parentRect.width / parentOverlay.offsetWidth || 1;
        const scaleY = parentRect.height / parentOverlay.offsetHeight || 1;

        const padding = 35; // Airy, imperial frame

        const localWidth = (maxX - minX) / scaleX;
        const localHeight = (maxY - minY) / scaleY;
        const localTop = (minY - parentRect.top) / scaleY;
        const localLeft = (minX - parentRect.left) / scaleX;

        highlight.style.width = (localWidth + (padding * 2)) + 'px';
        highlight.style.height = (localHeight + (padding * 2)) + 'px';
        highlight.style.top = (localTop - padding) + 'px';
        highlight.style.left = (localLeft - padding) + 'px';
        highlight.style.opacity = '1';

        // 🧠 INTELLECTUAL POSITIONING: Move guide box if it blocks the highlight
        if (guideBox) {
            const highlightCenterY = minY + (maxY - minY) / 2;
            const viewportHeight = window.innerHeight;

            if (highlightCenterY > viewportHeight / 2) {
                // Highlight is in bottom area (like steps 5, 6, 7)
                parentOverlay.style.alignItems = 'flex-start';
                guideBox.style.marginTop = '120px';
                guideBox.style.marginBottom = '0';
            } else {
                // Highlight is in top area
                parentOverlay.style.alignItems = 'flex-end';
                guideBox.style.marginBottom = '160px'; // Higher buffer to clear the strip
                guideBox.style.marginTop = '0';
            }
        }
    } else if (highlight) {
        highlight.style.opacity = '0';
    }
}

// Ensure guide stays aligned on resize
window.addEventListener('resize', () => {
    const overlay = document.getElementById('hud-guide-overlay');
    if (overlay && !overlay.classList.contains('hidden')) {
        updateGuideStep();
    }
});

/* ===== MOUSE LABELS / TOOLTIPS ===== */
document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('hud-tooltip');
    if (!tooltip) return;

    const hudElements = document.querySelectorAll('.hud-dock-btn, .search-box, .hud-search-wrapper, .data-group');

    hudElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const label = el.getAttribute('title') || el.dataset.label;
            if (!label) return;

            tooltip.innerText = label;
            tooltip.classList.remove('hidden');

            // Optionally disable default title to avoid double tooltips
            if (el.hasAttribute('title')) {
                el.dataset.oldTitle = el.getAttribute('title');
                el.removeAttribute('title');
            }
        });

        el.addEventListener('mousemove', (e) => {
            const parentRect = document.querySelector('.map-hud-overlay').getBoundingClientRect();
            const x = e.clientX - parentRect.left;
            const y = e.clientY - parentRect.top;

            tooltip.style.left = x + 'px';
            tooltip.style.top = y + 'px';
        });

        el.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
            if (el.dataset.oldTitle) {
                el.setAttribute('title', el.dataset.oldTitle);
            }
        });
    });
});


function updateTabletTime() {
    const timeEl = document.getElementById('tablet-live-time');
    const footerTimeEl = document.getElementById('footer-live-time');
    const t = translations[currentLang];
    const now = new Date();
    const timeString = now.toLocaleTimeString(t.locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    if (timeEl) timeEl.innerText = timeString;
    if (footerTimeEl) footerTimeEl.innerText = `${timeString}${t.footer_version}`;
}

// ===== AGENT SYSTEM BRIDGE =====
function setupAgentBridge() {
    // 3D View Toggle
    const btn3d = document.getElementById('toggle-3d');
    if (btn3d) {
        btn3d.addEventListener('click', async () => {
            const is3d = document.body.classList.toggle('mode-3d');
            if (is3d && window.explorerAgent) {
                const container = document.getElementById('map-3d-canvas');
                await window.explorerAgent.skills.map.initMap(container);
            }
        });
    }

    // Quiz Toggle
    const btnQuiz = document.getElementById('toggle-quiz');
    const quizModal = document.getElementById('quiz-modal');
    if (btnQuiz && quizModal) {
        btnQuiz.addEventListener('click', async () => {
            quizModal.classList.add('active');
            if (window.explorerAgent) {
                const quizRoot = document.getElementById('quiz-ui-root');
                await window.explorerAgent.skills.assessment.startQuiz(quizRoot);
            }
        });
    }

    if (quizModal) {
        quizModal.addEventListener('click', (e) => {
            if (e.target === quizModal) quizModal.classList.remove('active');
        });
    }
}

// ===== PERFORMANCE: SMOOTH INTERACTION =====
let lastMouseUpdate = 0;
document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastMouseUpdate < 16) return;
    lastMouseUpdate = now;

    const hudGroup = document.querySelector('.hud-top-bar');
    if (hudGroup && typeof gsap !== 'undefined') {
        const xPercent = (e.clientX / window.innerWidth - 0.5) * 5;
        const yPercent = (e.clientY / window.innerHeight - 0.5) * 10;
        gsap.to(hudGroup, {
            rotationY: xPercent,
            rotationX: -yPercent,
            duration: 0.5,
            ease: "power2.out"
        });
    }
})

    // ===== HIEROGLYPH TRANSLATOR ENGINE =====
    ; (function () {
        // Gardiner Uniliteral Sign List — historically accurate alphabet mapping
        const HIERO_MAP = {
            'a': { glyph: '𓄿', name: 'Vulture' },
            'b': { glyph: '𓃀', name: 'Foot' },
            'c': { glyph: '𓎡', name: 'Basket' },
            'd': { glyph: '𓂧', name: 'Hand' },
            'e': { glyph: '𓇌', name: 'Two Reeds' },
            'f': { glyph: '𓆑', name: 'Viper' },
            'g': { glyph: '𓎼', name: 'Jar Stand' },
            'h': { glyph: '𓉔', name: 'Shelter' },
            'i': { glyph: '𓇋', name: 'Reed' },
            'j': { glyph: '𓆓', name: 'Cobra' },
            'k': { glyph: '𓎡', name: 'Basket' },
            'l': { glyph: '𓃭', name: 'Lion' },
            'm': { glyph: '𓅓', name: 'Owl' },
            'n': { glyph: '𓈖', name: 'Water' },
            'o': { glyph: '𓍯', name: 'Lasso' },
            'p': { glyph: '𓊪', name: 'Stool' },
            'q': { glyph: '𓈎', name: 'Hill Slope' },
            'r': { glyph: '𓂋', name: 'Mouth' },
            's': { glyph: '𓋴', name: 'Cloth' },
            't': { glyph: '𓏏', name: 'Bread' },
            'u': { glyph: '𓅱', name: 'Quail' },
            'v': { glyph: '𓆑', name: 'Viper' },
            'w': { glyph: '𓅱', name: 'Quail' },
            'x': { glyph: '𓎡𓋴', name: 'KS combo' },
            'y': { glyph: '𓇌', name: 'Two Reeds' },
            'z': { glyph: '𓊃', name: 'Bolt' },
            '0': { glyph: '𓄤', name: 'Zero' },
            '1': { glyph: '𓏺', name: 'One' },
            '2': { glyph: '𓏻', name: 'Two' },
            '3': { glyph: '𓏼', name: 'Three' },
            '4': { glyph: '𓏽', name: 'Four' },
            '5': { glyph: '𓏾', name: 'Five' },
            '6': { glyph: '𓏿', name: 'Six' },
            '7': { glyph: '𓐀', name: 'Seven' },
            '8': { glyph: '𓐁', name: 'Eight' },
            '9': { glyph: '𓐂', name: 'Nine' },
            '.': { glyph: '𓊽', name: 'Period' },
            ',': { glyph: '𓇼', name: 'Comma' },
            '!': { glyph: '𓂝', name: 'Exclaim' },
            '?': { glyph: '𓁹', name: 'Question' },
        };

        // Build reverse map (hieroglyph → english)
        const REVERSE_MAP = {};
        Object.entries(HIERO_MAP).forEach(([letter, data]) => {
            // For multi-char glyphs or duplicates, first wins
            if (!REVERSE_MAP[data.glyph]) {
                REVERSE_MAP[data.glyph] = { letter: letter, name: data.name };
            }
        });

        window.hieroDirection = 'en-to-hiero';

        function englishToHiero(text) {
            let result = '';
            for (const char of text.toLowerCase()) {
                if (char === ' ') {
                    result += ' 𓊖 '; // word separator
                } else if (HIERO_MAP[char]) {
                    result += HIERO_MAP[char].glyph;
                } else {
                    result += char;
                }
            }
            return result;
        }

        function hieroToEnglish(text) {
            let result = '';
            // Handle the word separator
            const cleaned = text.replace(/\s*𓊖\s*/g, ' ');
            // Process each character (some hieroglyphs are multi-byte)
            for (const char of cleaned) {
                if (char === ' ') {
                    result += ' ';
                } else if (REVERSE_MAP[char]) {
                    result += REVERSE_MAP[char].letter;
                } else {
                    result += char;
                }
            }
            return result;
        }

        function buildBreakdownCards(text, container) {
            // Using a fragment to minimize reflows
            const fragment = document.createDocumentFragment();
            let delay = 0;
            const lowerText = window.hieroDirection === 'en-to-hiero' ? text.toLowerCase() : text;

            if (window.hieroDirection === 'en-to-hiero') {
                for (const char of lowerText) {
                    if (char === ' ') {
                        const space = document.createElement('div');
                        space.className = 'glyph-space';
                        space.textContent = '⸱';
                        fragment.appendChild(space);
                    } else if (HIERO_MAP[char]) {
                        const card = document.createElement('div');
                        card.className = 'glyph-card';
                        card.style.animationDelay = `${delay * 0.03}s`; // Slightly tighter
                        card.innerHTML = `
                            <span class="glyph-hiero">${HIERO_MAP[char].glyph}</span>
                            <span class="glyph-letter">${char.toUpperCase()}</span>
                        `;
                        card.title = HIERO_MAP[char].name;
                        fragment.appendChild(card);
                        delay++;
                    }
                }
            } else {
                const cleaned = text.replace(/\s*𓊖\s*/g, ' ');
                for (const char of cleaned) {
                    if (char === ' ') {
                        const space = document.createElement('div');
                        space.className = 'glyph-space';
                        space.textContent = '⸱';
                        fragment.appendChild(space);
                    } else if (REVERSE_MAP[char]) {
                        const card = document.createElement('div');
                        card.className = 'glyph-card';
                        card.style.animationDelay = `${delay * 0.03}s`;
                        card.innerHTML = `
                            <span class="glyph-hiero">${char}</span>
                            <span class="glyph-letter">${REVERSE_MAP[char].letter.toUpperCase()}</span>
                        `;
                        card.title = REVERSE_MAP[char].name;
                        fragment.appendChild(card);
                        delay++;
                    }
                }
            }
            container.innerHTML = '';
            container.appendChild(fragment);
        }

        function buildRefChart(container) {
            container.innerHTML = '';
            Object.entries(HIERO_MAP).forEach(([letter, data]) => {
                // Skip duplicates (v=f, w=u, c=k, x=ks)
                if (letter === 'v' || letter === 'w' || letter === 'c') return;
                const cell = document.createElement('div');
                cell.className = 'ref-cell';
                cell.innerHTML = `
                <span class="ref-hiero">${data.glyph}</span>
                <span class="ref-letter">${letter.toUpperCase()}</span>
                <span class="ref-name">${data.name}</span>
            `;
                container.appendChild(cell);
            });
        }

        function translate() {
            const input = document.getElementById('hiero-input');
            const output = document.getElementById('hiero-output');
            const charNum = document.getElementById('hiero-char-num');
            const breakdown = document.getElementById('hiero-breakdown');
            const cardsContainer = document.getElementById('hiero-glyph-cards');
            if (!input || !output) return;

            const text = input.value;
            charNum.textContent = text.length;

            if (!text.trim()) {
                output.innerHTML = `<span class="hiero-placeholder">${translations[currentLang].hiero_placeholder}</span>`;
                breakdown.classList.remove('active');
                return;
            }

            let result;
            if (window.hieroDirection === 'en-to-hiero') {
                result = englishToHiero(text);
            } else {
                result = hieroToEnglish(text);
            }

            output.textContent = result;
            output.style.fontSize = window.hieroDirection === 'en-to-hiero' ? '1.8rem' : '1.1rem';
            output.style.letterSpacing = window.hieroDirection === 'en-to-hiero' ? '0.15em' : '0';
            output.style.color = window.hieroDirection === 'en-to-hiero' ? 'var(--c-gold)' : 'var(--c-text)';

            // Build breakdown
            breakdown.classList.add('active');
            buildBreakdownCards(text, cardsContainer);
        }

        function swapDirection() {
            const fromLabel = document.getElementById('hiero-from-label');
            const toLabel = document.getElementById('hiero-to-label');
            const inputLabel = document.getElementById('hiero-input-label');
            const outputLabel = document.getElementById('hiero-output-label');
            const input = document.getElementById('hiero-input');
            const output = document.getElementById('hiero-output');
            const t = translations[currentLang];

            if (window.hieroDirection === 'en-to-hiero') {
                window.hieroDirection = 'hiero-to-en';
                fromLabel.innerHTML = `<span class="lang-dot"></span> 𓊹𓌃 ${t.hiero_lang_hiero}`;
                toLabel.innerHTML = `<span class="lang-dot"></span> ${t.hiero_lang_en}`;
                inputLabel.textContent = t.hiero_output_label;
                outputLabel.textContent = t.hiero_input_label;
                input.placeholder = t.hiero_input_ph_hiero;
            } else {
                window.hieroDirection = 'en-to-hiero';
                fromLabel.innerHTML = `<span class="lang-dot"></span> ${t.hiero_lang_en}`;
                toLabel.innerHTML = `<span class="lang-dot"></span> 𓊹𓌃 ${t.hiero_lang_hiero}`;
                inputLabel.textContent = t.hiero_input_label;
                outputLabel.textContent = t.hiero_output_label;
                input.placeholder = t.hiero_input_ph_en;
            }

            // Swap active styling
            fromLabel.classList.toggle('hiero-lang-active');
            toLabel.classList.toggle('hiero-lang-active');

            // Clear and re-translate with swapped content
            const currentOutput = output.textContent;
            if (currentOutput && !output.querySelector('.hiero-placeholder')) {
                input.value = currentOutput;
            } else {
                input.value = '';
            }
            translate();
        }

        // Init
        document.addEventListener('DOMContentLoaded', function () {
            const input = document.getElementById('hiero-input');
            const swapBtn = document.getElementById('hiero-swap-btn');
            const copyBtn = document.getElementById('hiero-copy-btn');
            const refToggle = document.getElementById('hiero-ref-toggle');
            const refChart = document.getElementById('hiero-ref-chart');
            const refGrid = document.getElementById('hiero-ref-grid');

            if (!input) return; // Section not present

            // Live translation on input with performance debouncing
            let inputTimer;
            input.addEventListener('input', () => {
                clearTimeout(inputTimer);
                inputTimer = setTimeout(translate, 30); // 30ms immediate-enough debounce
            });

            // Swap button
            if (swapBtn) swapBtn.addEventListener('click', swapDirection);

            // Copy button
            if (copyBtn) {
                copyBtn.addEventListener('click', function () {
                    const output = document.getElementById('hiero-output');
                    const text = output.textContent;
                    if (!text || output.querySelector('.hiero-placeholder')) return;

                    navigator.clipboard.writeText(text).then(() => {
                        copyBtn.classList.add('copied');
                        copyBtn.querySelector('.copy-text').textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.classList.remove('copied');
                            copyBtn.querySelector('.copy-text').textContent = 'Copy';
                        }, 2000);
                    });
                });
            }

            // Reference chart toggle
            if (refToggle && refChart && refGrid) {
                buildRefChart(refGrid);
                refToggle.addEventListener('click', function () {
                    refToggle.classList.toggle('open');
                    refChart.classList.toggle('open');
                });
            }
        });
    })();
// ===== NEWSLETTER INTERACTIVITY & ANIMATIONS =====
window.handleNewsletter = function (event) {
    event.preventDefault();
    const form = event.target;
    const btn = document.getElementById("nl-submit-btn");
    const content = document.getElementById("newsletter-content-view");
    const success = document.getElementById("newsletter-success-view");

    if (!btn || !content || !success) return;

    btn.classList.add("subscribing");
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        btn.classList.remove("subscribing");

        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();

            // Final Airplane Flight away
            tl.to(".nl-airplane", {
                x: 100,
                y: -100,
                scale: 1.5,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in"
            });

            tl.to(content, {
                opacity: 0,
                y: -30,
                scale: 0.95,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power3.in",
                onComplete: () => {
                    content.style.display = "none";
                    success.style.display = "block";
                }
            }, "-=0.3");

            tl.fromTo(success,
                { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" },
                { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "back.out(1.7)" }
            );

            // Animate success icon glitch
            tl.from(".success-icon", {
                scale: 0,
                rotation: -45,
                duration: 0.6,
                ease: "back.out(2)"
            }, "-=0.4");
        } else {
            content.style.display = "none";
            success.style.display = "block";
        }

        form.reset();
    }, 2000);
};

window.resetNewsletterUI = function () {
    const btn = document.getElementById("nl-submit-btn");
    const content = document.getElementById("newsletter-content-view");
    const success = document.getElementById("newsletter-success-view");

    if (!btn || !content || !success) return;

    if (typeof gsap !== 'undefined') {
        gsap.to(success, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            onComplete: () => {
                success.style.display = "none";
                content.style.display = "block";
                btn.disabled = false;
                gsap.fromTo(content,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
                // Reset airplane
                gsap.set(".nl-airplane", { x: 0, y: 0, scale: 1, opacity: 1 });
            }
        });
    } else {
        success.style.display = "none";
        content.style.display = "block";
        btn.disabled = false;
    }
};

// Initialize interactive effects
document.addEventListener("DOMContentLoaded", () => {
    const nlBox = document.querySelector(".footer-newsletter");
    const nlForm = document.getElementById("newsletter-form");
    const nlBtn = document.getElementById("nl-submit-btn");

    if (nlForm) {
        nlForm.addEventListener("submit", window.handleNewsletter);
    }

    if (nlBox && typeof gsap !== 'undefined') {
        // 1. Mouse Tilt Effect
        nlBox.addEventListener("mousemove", (e) => {
            const rect = nlBox.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = -(x - centerX) / 40;

            gsap.to(nlBox, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                perspective: 1000
            });
        });

        nlBox.addEventListener("mouseleave", () => {
            gsap.to(nlBox, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        });

        // 2. Magnetic Button Effect
        if (nlBtn) {
            nlBtn.addEventListener("mousemove", (e) => {
                const rect = nlBtn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(nlBtn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(nlBtn.querySelector(".btn-text"), {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            nlBtn.addEventListener("mouseleave", () => {
                gsap.to([nlBtn, nlBtn.querySelector(".btn-text")], {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
            // 3. Typing Pulse Effect
            const nlInput = nlForm ? nlForm.querySelector("input") : null;
            if (nlInput) {
                nlInput.addEventListener("input", () => {
                    gsap.to(nlBox, {
                        scale: 1.01,
                        duration: 0.1,
                        yoyo: true,
                        repeat: 1,
                        ease: "power1.inOut"
                    });
                });

                // Prep for takeoff
                nlInput.addEventListener("focus", () => {
                    gsap.to(".nl-airplane", {
                        rotation: -15,
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                nlInput.addEventListener("blur", () => {
                    gsap.to(".nl-airplane", {
                        rotation: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.in"
                    });
                });
            }
        }
    }
});

// ===== FOOTER ANALOG CLOCK ENGINE =====
function initFooterAnalogClock() {
    const updateClock = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const sHand = document.getElementById('clock-s');
        const mHand = document.getElementById('clock-m');
        const hHand = document.getElementById('clock-h');

        if (sHand) sHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
        if (mHand) mHand.style.transform = `translateX(-50%) rotate(${(minutes * 6) + (seconds / 10)}deg)`;
        if (hHand) hHand.style.transform = `translateX(-50%) rotate(${(hours * 30) + (minutes / 2)}deg)`;
    };

    setInterval(updateClock, 1000);
    updateClock();
}
document.addEventListener('DOMContentLoaded', initFooterAnalogClock);
