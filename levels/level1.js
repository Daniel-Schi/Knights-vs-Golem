let level1;


function initLevel() {
    level1 = new Level(
        [
            new Golem(),
            new Golem(),
            new Golem(),
            new Golem(),
            new GolemSmall(),
            new GolemSmall(),
            new GolemSmall(),
            new GolemSmall()
        ],
        [
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', -719, 0),
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', 0, 0),
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', 719, 0),
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', 719 * 2, 0),
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', 719 * 3, 0),
            new Clouds('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png', 719 * 4, 0),

        ],
        [
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', -719, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', -719, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', -719, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', -719, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', -719, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 0, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 0, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 0, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 0, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 0, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 3, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 3, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 3, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 3, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 3, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 4, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 4, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 4, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 4, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 4, -480 * 4),

            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 5, 0),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 5, -480),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 5, -480 * 2),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 5, -480 * 3),
            new Snow('img/background-Winter/BG_01/Layers/Snow.png', 719 * 5, -480 * 4)
        ],
        [
            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', -719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', -719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', -719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', -719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', -719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', -719, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 0, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 0, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 0, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 0, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 0, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 0, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719 * 2, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719 * 2, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719 * 2, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719 * 2, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719 * 2, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719 * 2, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719 * 3, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719 * 3, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719 * 3, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719 * 3, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719 * 3, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719 * 3, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719 * 4, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719 * 4, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719 * 4, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719 * 4, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719 * 4, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719 * 4, 0),

            new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719 * 5, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719 * 5, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719 * 5, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719 * 5, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719 * 5, 0),
            new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719 * 5, 0)
        ],
        [
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords(),
            new Swords()
        ],
        [
            new MagicDrank(),
            new MagicDrank(),
            new MagicDrank(),
            new MagicDrank(),
            new MagicDrank()
        ],
        [
            new Endboss()
        ],
    );
}
