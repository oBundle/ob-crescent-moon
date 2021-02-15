export default function() {
  const $linkToHighlights = $('#ob-link-to-highlights')
  const $catHighlights = $('#ob-cat-highlights')

  if ($linkToHighlights.length < 1) {
    $catHighlights.hide()
  }
}
