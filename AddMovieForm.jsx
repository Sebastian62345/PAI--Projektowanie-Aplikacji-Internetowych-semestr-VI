import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormStyles.css';

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Tytuł zbyt krótki!')
    .max(100, 'Tytuł zbyt długi!')
    .required('Pole wymagane'),
  year: Yup.number()
    .min(1895, 'Rok musi być późniejszy niż 1895')
    .max(new Date().getFullYear(), 'Rok nie może być z przyszłości')
    .required('Pole wymagane'),
  genre: Yup.array()
    .min(1, 'Wybierz przynajmniej jeden gatunek'),
  rating: Yup.number()
    .min(1, 'Ocena musi być między 1 a 5')
    .max(5, 'Ocena musi być między 1 a 5')
});

export default function AddMovieForm({ onAddMovie }) {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      year: '',
      genre: [],
      rating: '',
      description: ''
    },
    validationSchema: MovieSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await onAddMovie(values);
        resetForm();
        setSubmissionStatus('success');
        setTimeout(() => setSubmissionStatus(null), 3000);
      } catch (error) {
        setSubmissionStatus('error');
      }
    }
  });

  const genres = ['Akcja', 'Komedia', 'Dramat', 'Horror', 'Sci-Fi', 'Animacja'];

  return (
    <div className="form-container">
      <h2>Dodaj nowy film</h2>
      
      {submissionStatus === 'success' && (
        <div className="alert success">Film został dodany!</div>
      )}
      
      {submissionStatus === 'error' && (
        <div className="alert error">Wystąpił błąd podczas dodawania</div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Tytuł*</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={formik.touched.title && formik.errors.title ? 'error' : ''}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error-message">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="year">Rok produkcji*</label>
          <input
            id="year"
            name="year"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            className={formik.touched.year && formik.errors.year ? 'error' : ''}
          />
          {formik.touched.year && formik.errors.year ? (
            <div className="error-message">{formik.errors.year}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Gatunek*</label>
          <div className="checkbox-group">
            {genres.map(genre => (
              <label key={genre} className="checkbox-label">
                <input
                  type="checkbox"
                  name="genre"
                  value={genre}
                  checked={formik.values.genre.includes(genre)}
                  onChange={() => {
                    const newGenres = formik.values.genre.includes(genre)
                      ? formik.values.genre.filter(g => g !== genre)
                      : [...formik.values.genre, genre];
                    formik.setFieldValue('genre', newGenres);
                  }}
                />
                {genre}
              </label>
            ))}
          </div>
          {formik.touched.genre && formik.errors.genre ? (
            <div className="error-message">{formik.errors.genre}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Ocena (1-5)*</label>
          <input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            min="1"
            max="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
            className={formik.touched.rating && formik.errors.rating ? 'error' : ''}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <div className="error-message">{formik.errors.rating}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="description">Opis</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          disabled={formik.isSubmitting}
          className="submit-btn"
        >
          {formik.isSubmitting ? 'Dodawanie...' : 'Dodaj film'}
        </button>
      </form>
    </div>
  );
}
