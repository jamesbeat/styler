<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <!-- ______________________ HEADER _______________________ -->

  <header id="header">
    <div class="container">
      <?php if ($logo): ?>
      	<div id="logo-block">
	        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
	          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
	        </a>
      	</div>
      <?php endif; ?>
      
    
      <div id="site-block">
	      <h1 id="site-name"><?php print $site_name; ?></h1>
	     <!-- <h2 id="site-slogan"><?php print $site_slogan; ?></h2> -->
      </div>
     
      
      <?php if ($page['header']): ?>
        <div id="header-region">
          <?php print render($page['header']); ?>
        </div>
      <?php endif; ?>
    </div>
  </header> <!-- /header -->

 
  <!-- ______________________ MAIN _______________________ -->

  <div id="main">
    <div class="container">
      <section id="content">
  
          <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
            <div id="content-header">

              <?php print $breadcrumb; ?>

              <?php if ($page['highlighted']): ?>
                <div id="highlighted"><?php print render($page['highlighted']) ?></div>
              <?php endif; ?>

              <?php print render($title_prefix); ?>

              <?php if ($title): ?>
                <h1 class="title"><?php print $title; ?></h1>
              <?php endif; ?>

              <?php print render($title_suffix); ?>
              <?php print $messages; ?>
              <?php print render($page['help']); ?>

              
            </div> <!-- /#content-header -->
          <?php endif; ?>

          <div id="content-area">
	          
	           <?php if ($tabs): ?>
                <div class="tabs"><?php print render($tabs); ?></div>
              <?php endif; ?> 
	          
            <?php print render($page['content']) ?>
            
	            <ul class="add_controls">
		          
		         	<?php global $base_url; ?>
		      		<li><a id="add_anchor" title="Add Block" href=""><i></i></a></li>
			      		
	      			 <li><a id="add_text" title="Add Text Block" href="<?php print $base_url;?>/node/add/text?edit[field_parent][und]=<?php if (isset($node)){ print $node->nid."&destination=node/".$node->nid;}?>"><i></i></a></li>
			          <li><a id="add_color" title="Add Color Block" href="<?php print $base_url;?>/node/add/color-swatch?edit[field_parent][und]=<?php if (isset($node)){ print $node->nid."&destination=node/".$node->nid;}?>"><i></i></a></li>
			          <li><a id="add_code" title="Add Code Block" href="<?php print $base_url;?>/node/add/color-swatch?edit[field_parent][und]=<?php if (isset($node)){ print $node->nid."&destination=node/".$node->nid;}?>"><i></i></a></li>
			      	
		      				          
	          </ul>

          </div>
                 
          
          
          <?php print $feed_icons; ?>
          
          
        

              <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>


      </section> <!-- /content-inner /content -->

      <?php if ($page['sidebar_first']): ?>
        <aside id="sidebar-first" class="column sidebar first">
          <?php print render($page['sidebar_first']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-first -->

      <?php if ($page['sidebar_second']): ?>
        <aside id="sidebar-second" class="column sidebar second">
          <?php print render($page['sidebar_second']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-second -->
    </div>
  </div> <!-- /main -->

  <!-- ______________________ FOOTER _______________________ -->

  <?php if ($page['footer']): ?>
    <footer id="footer">
      <div class="container">
      <?php print render($page['footer']); ?>
      </div>
    </footer> <!-- /footer -->
  <?php endif; ?>

</div> <!-- /page -->
