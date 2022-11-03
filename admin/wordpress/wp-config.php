<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rtxp_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cy%f2xjR1MJyr]jL)7a[P8H)Kg*`G)MC!a)7(ok_~Q2-(wRKKlK4 <}J#0v;rH+R' );
define( 'SECURE_AUTH_KEY',  '-#tvZ6CZ8;^Be|+k/ZG/1VESjy&UGp5=j_>r7U5%b^/`8XzNOp,YGXLwc/=AcD/D' );
define( 'LOGGED_IN_KEY',    '#O=rf]vl?sOs+QL9pq3|H~.S7N,K.L|4Ke+X/|K:RFL+wv(C14&!$tt7J?F?xzUp' );
define( 'NONCE_KEY',        'b?>*sKh|iB^(~{0vlNokU2PGH60sUMA~uP=OCpr*EyHV@MeZ-w ucVNX$O &?}r0' );
define( 'AUTH_SALT',        '$K<xg%(MB+A ;{uhVLFvQcr~2J*`l0rcy_Y.vaXHa4y.#46X ]F#PG.=)1^@ed@I' );
define( 'SECURE_AUTH_SALT', '4[7i%oJFF-tOOmc}>f.IHH%K*ikg+,+nsj$E5SnPGifH2V2+Dt)wQsBp) _TrW:@' );
define( 'LOGGED_IN_SALT',   ' +s2%}z7o%Ohg-=;XtueMn&}-6|vX[y8cw1-ZrnP|W<?/ys6v^#1^&((5 HvBbK?' );
define( 'NONCE_SALT',       'X;Gh<eq/fS+8*(y;B59|uh%>a9,)VzrV;d/6 ^Z(!>G-58M#wF,[L-%M;!(ixu.3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
