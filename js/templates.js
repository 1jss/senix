var launcherTemp='<li class="launcher" shortcut="{shortcut}">'+'<b style="background:{background};"><i class="fas fa-{icon}"></i>'+'</b><p>{name}</p></li>';
var windowTemp='<div style="width:100%;height:100%;top:0;left:0;z-index:1000" class="window-container window-current" window="{num}" id="window_{num}_warp">'+'<div style="height: 100%;" id="window_{num}_inner">'+'<div class="window-frame" id="window-frame_{num}">'+'<div style="z-index:9000000;background:none;height:100%;position:absolute;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;display:none"></div>'+'<iframe frameborder="0" id="frame{num}" src="{url}"></iframe>'+'</div>'+'{resize}'+'<div style="position:absolute;overflow:hidden;background:url(images/transparent.gif) repeat;display:block" resize="min_width"></div>'+'<div style="position:absolute;overflow:hidden;background:url(images/transparent.gif) repeat;display:block" resize="min_height"></div>'+'</div>'+'</div>';
